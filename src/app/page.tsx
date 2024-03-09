import { Form } from "@/components/Form";
import { NextPage } from "next";
import { PiCakeDuotone } from "react-icons/pi";
const Home: NextPage = async () => {
  return (
    <main
      className={`w-screen lg:max-w-[700px] flex items-start justify-center relative`}
    >
      <section className="p-8 xs:p-10 md:p-14 gap-5 flex flex-col items-center justify-center bg-white rounded-md shadow-sm shadow-black/60 max-w-[350px] xs:max-w-[400px] md:max-w-[600px]">
        <article
          className={`flex flex-col gap-3 text-center text-customized_pink `}
        >
          <h1
            className={`flex items-center gap-2 justify-center font-bold text-lg xs:text-xl md:text-2xl`}
          >
            <PiCakeDuotone /> Obrigada por Comprar Comigo! <PiCakeDuotone />
          </h1>
          <span className={`font-semibold text-base md:text-lg leading-5`}>
            Seu feedback é muito importante para mim, me ajuda a melhorar cada
            vez mais.
          </span>
        </article>
        <Form />
      </section>
    </main>
  );
};
export default Home;
