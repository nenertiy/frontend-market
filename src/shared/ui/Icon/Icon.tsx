import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface IconProps {
  link: string;
  img: string;
  desc: string;
  onClick?: () => void;
}

const Icon: FC<IconProps> = ({ link, img, desc, onClick }) => {
  return (
    <Link
      href={link}
      onClick={onClick}
      className="flex items-center justify-center border border-black rounded-full  hover:bg-[rgb(246,246,253)] transition ease-in-out duration-300">
      <Image
        className="w-8 h-8"
        src={img}
        alt={desc}
      />
    </Link>
  );
};

export default Icon;
