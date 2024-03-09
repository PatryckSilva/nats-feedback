import Image from "next/image";
import { InstagramButton } from "./instagramButton";

export const Header = () => {
  return (
    <header
      className={`fixed top-0 w-screen h-[90px] md:h-[105px] flex items-center justify-between bg-customized_purpled px-6 md:px-20 boxshadow rounded-b-3xl z-10`}
    >
      <figure className={`relative size-[80px] md:size-[100px]`}>
        <Image
          src={"/image/logos/logo.png"}
          alt="Logo da loja Natalyn delícias"
          fill={true}
        />
      </figure>
      <InstagramButton />
    </header>
  );
};
