import type { DefaultSession } from "next-auth";

type accessToken = string;

declare module "next-auth" {
  interface Session {
    token?: accessToken;
    user: {
      token?: accessToken;
    } & DefaultSession["user"];
  }
  interface Account {
    access_token: accessToken;
    user: {
      token?: accessToken;
    } & DefaultSession["user"];
  }
}
