import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { sql } from "@vercel/postgres";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { title, content, author } = request.body as {
    title: string;
    content: string;
    author: string;
  };
  const secret = process.env.SECRET_KEY;
  const token = await getToken({
    req: request,
    secret: secret,
  });
  try {
    if (request.method === "POST" && token) {
      if (!title || !content || !author) {
        return response.status(400).json({ error: "403 - Forbidden" });
      }
      const result =
        await sql`INSERT INTO blog (title,content,author) VALUES (${title},${content},${author});`;
      return response.status(200).json({ data: result });
    } else {
      return response.status(400).json({
        error:
          "Trip tüm bedene estetik ayakta,düşmeyi bilmeden inmedik tepeden ,Dosdoğru sikmedik bozarı oyunu,andaval kitleye dur dedik yetmedi ,stickledik, Trip aslanlar gibi avlar trip aslanlar gibi avlar",
      });
    }
  } catch (error) {
    return response.status(500).json({ erorr: error });
  }
}
