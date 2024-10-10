"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("53e30831-a31d-4b82-a8d7-f491f3903084");
  }, []);
  return null;
};

export default CrispChat;
