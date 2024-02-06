import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { id } = request.query as { id: string };
  try {
    if (id) {
      const data = await sql`SELECT * FROM blog WHERE id= ${id}`;
      return response.status(200).json({ data });
    }
    const result = await sql`Select * from blog`;
    return response.status(200).json({ data: result });
  } catch (error) {
    return response.status(500).json({ error: error });
  }
}
