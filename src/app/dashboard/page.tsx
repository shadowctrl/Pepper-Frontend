"use client";
import getCookie from "@/utils/getCookie";
import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Auth from "@/utils/Auth";
const endpointUrl = process.env.NEXT_PUBLIC_endpoint_url;
const me = endpointUrl + "/users/@me";

const accessInfo = async (accessCode: string) => {
  const headers = {
    Authorization: `Bearer ${accessCode}`,
  };

  const response = await axios.get(me, { headers });
  console.log("User data", response);
};

const Dashboard = () => {};

export default Dashboard;
