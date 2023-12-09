"use server";
import { cookies } from "next/headers";

async function getCookie() {
  return cookies().get("accessToken");
}

export default getCookie;
