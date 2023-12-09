"use client";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import setCookie from "../../utils/setCookie";
const endpointUrl = process.env.NEXT_PUBLIC_endpoint_url;
const tokenUrl = endpointUrl + "/oauth2/token";
const me = endpointUrl + "/users/@me";

type base_data = {
  client_id: string | undefined;
  client_secret: string | undefined;
  redirect_uri: string | undefined;
  scope: string;
};
const base_data_value: base_data = {
  client_id: process.env.NEXT_PUBLIC_client_id,
  client_secret: process.env.NEXT_PUBLIC_client_secret,
  redirect_uri: process.env.NEXT_PUBLIC_redirect_uri,
  scope: "identify email",
};

const accessInfo = async (accessCode: string) => {
  const headers = {
    Authorization: `Bearer ${accessCode}`,
  };

  const response = await axios.get(me, { headers });
  console.log("User data", response);
};
const exchangeToken = async (code: string): Promise<AxiosResponse> => {
  const data = {
    client_id: base_data_value.client_id,
    client_secret: base_data_value.client_secret,
    redirect_uri: base_data_value.redirect_uri,
    grant_type: "authorization_code",
    code: code,
  };
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const response: AxiosResponse = await axios
    .post(tokenUrl, data, { headers })
    .catch((err) => {
      return new Promise((resolve) => {
        console.log("Code Invalid", err, code);
      });
    });
  const accessToken = response.data.access_token;
  const accessTokenExpiry = response.data.expires_in;
  await setCookie(accessToken, accessTokenExpiry);
  await accessInfo(accessToken);
  return response;
};

const login = () => {
  const searchParams = useSearchParams();
  useEffect(() => {
    (async () => {
      const codevalue = searchParams.get("code");
      if (codevalue) {
        const response: AxiosResponse = await exchangeToken(codevalue);
      }
    })();
  }, []);
};

export default login;
