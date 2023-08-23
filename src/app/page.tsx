"use client";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
const endpointUrl = "https://discord.com/api";
const tokenUrl = endpointUrl + "/oauth2/token";

interface base_data {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  scope: string;
}
const base_data_value: base_data = {
  client_id: "1042079881678299207",
  client_secret: "",
  redirect_uri: "http://localhost:3000",
  scope: "identify email",
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
  const response = await axios.post(tokenUrl, data, { headers });
  return response;
};
const getOauthCode = () => {
  window.open(
    `https://discord.com/api/oauth2/authorize?client_id=${base_data_value.client_id}&redirect_uri=${base_data_value.redirect_uri}&response_type=code&scope=${base_data_value.scope}`,
    "_self"
  );
};
const page = () => {
  const searchParams = useSearchParams();
  useEffect(() => {
    (async () => {
      const codevalue = searchParams.get("code");
      if (codevalue) await exchangeToken(codevalue);
    })();
  }, []);
  return (
    <div className="cursor-pointer" onClick={getOauthCode}>
      sign in with Discord
    </div>
  );
};

export default page;
