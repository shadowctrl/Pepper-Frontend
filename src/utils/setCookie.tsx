"use server";
import { cookies } from "next/headers";

async function setCookie(accessToken: string) {
  cookies().set("accessToken", accessToken, { httpOnly: true, secure: true });
}

export default setCookie;
