"use client";
import { FaInstagram } from "react-icons/fa6";
export const InstagramButton = () => {
  return (
    <span
      onClick={() => open("https://www.instagram.com/_natdoces_/")}
      className={`button !p-2`}
    >
      <FaInstagram size={25} />
    </span>
  );
};
