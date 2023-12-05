"use server";
import { cookies } from "next/headers";

async function setCookie(accessToken: string, accessTokenExpiry: number) {
  let currentTimestamp = Date.now();
  let expiryTimestamp = currentTimestamp + accessTokenExpiry * 1000;

  cookies().set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    expires: expiryTimestamp,
  });
}

export default setCookie;
