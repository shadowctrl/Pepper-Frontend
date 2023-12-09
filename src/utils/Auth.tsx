"use client";
import { useEffect, useState } from "react";
import getCookie from "./getCookie";

function Auth() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getCookie().then((res) => {
      setAuthenticated(true);
    });
  }, []);
  return authenticated;
}

export default Auth;
