import { USER_INSTAGRAM, USER_TIKTOK, USER_TWITTER } from "@/constants";
import React from "react";
import { BsInstagram, BsTwitterX, BsTiktok } from "react-icons/bs";

interface SocialButtonsProps {
  noPadding?: boolean;
  size?: number;
}

const SocialButtons = ({ noPadding, size = 26 }: SocialButtonsProps) => {
  return (
    <div className={noPadding ? undefined : "px-3 py-4"}>
      <div className="flex flex-row gap-8 justify-center">
        <span
          className="hover:opacity-80 transition cursor-pointer"
          onClick={() =>
            window.open(`https://www.instagram.com/${USER_INSTAGRAM}`, "_blank")
          }
        >
          <BsInstagram size={size} />
        </span>
        <span
          className="hover:opacity-80 transition cursor-pointer"
          onClick={() =>
            window.open(`https://www.tiktok.com/@${USER_TIKTOK}`, "_blank")
          }
        >
          <BsTiktok size={size} />
        </span>
        {/* <span
          className="hover:opacity-80 transition cursor-pointer"
          onClick={() =>
            window.open(`https://www.facebook.com/${USER_FACEBOOK}`, "_blank")
          }
        >
          <BsFacebook size={size} />
        </span> */}
        <span
          className="hover:opacity-80 transition cursor-pointer"
          onClick={() =>
            window.open(`https://www.x.com/${USER_TWITTER}`, "_blank")
          }
        >
          <BsTwitterX size={size} />
        </span>
      </div>
    </div>
  );
};

export default SocialButtons;
