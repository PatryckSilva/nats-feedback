"use client";
import { envs } from "@/utils/constants";
import axios from "axios";
import { FormEvent, useRef, useState } from "react";
import Confetti from "react-confetti";
import { PiCakeDuotone } from "react-icons/pi";
import { useDebounceValue } from "usehooks-ts";
export const Form = () => {
  const cakeRef = useRef<HTMLDivElement>(null);
  const [debouncedName, setDebouncedName] = useDebounceValue<string>("", 500);
  const [debouncedFeedback, setDebouncedFeedback] = useDebounceValue<string>(
    "",
    500,
  );

  const [showingConfirmation, setShowingConfirmation] =
    useState<boolean>(false);

  async function postData() {
    const body = {
      name: debouncedName,
      feedback: debouncedFeedback,
    };
    const headers = {
      headers: {
        Authorization: `Bearer ${envs.sheetApiKey} `,
        "X-Spreadsheet-Id": `${envs.sheetId}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `https://api.sheetson.com/v2/sheets/${envs.sheetName}`,
        body,
        headers,
      );
      if (response) {
        setShowingConfirmation(true);
      }
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();
  };

  return (
    <form className={`w-full flex flex-col gap-5`} onSubmit={handleSubmit}>
      {!showingConfirmation && (
        <>
          {" "}
          <div className={`flex w-full flex-col gap-2 `}>
            <label
              htmlFor="name"
              className={`text-customized_pink font-semibold`}
            >
              Nome
            </label>
            <input
              className="bg-black/10 text-customized_pink w-full h-[40px] ring-1 ring-zinc-400 focus:ring-2 focus:ring-customized_pink outline-none duration-300 placeholder:text-black placeholder:opacity-50 rounded-md px-4 py-1 shadow-md focus:shadow-md focus:shadow-customized_pink"
              placeholder="Digite seu nome"
              type="text"
              name="name"
              required
              onChange={e => setDebouncedName(e.target.value)}
            />
          </div>
          <div className={`flex w-full flex-col gap-2 `}>
            <label
              htmlFor="Feedback"
              className={`text-customized_pink font-semibold`}
            >
              Feedback
            </label>
            <textarea
              className="bg-black/10 text-customized_pink h-[150px] md:!h-[200px] !w-full ring-1 ring-zinc-400 focus:ring-2 focus:ring-customized_pink outline-none duration-300 placeholder:text-black placeholder:opacity-50 rounded-md px-4 py-1 shadow-md focus:shadow-md focus:shadow-customized_pink"
              autoComplete="off"
              placeholder="Deixe seu feedback aqui"
              maxLength={5000}
              name="Feedback"
              required
              onChange={e => setDebouncedFeedback(e.target.value)}
            />
          </div>
          <button
            className={`button w-full flex items-center gap-2 justify-center`}
            type="submit"
          >
            Enviar Feedback <PiCakeDuotone size={25} />
          </button>
        </>
      )}
      {showingConfirmation && (
        <span
          className={`underline cursor-pointer text-center text-customized_pink`}
          onClick={() => setShowingConfirmation(false)}
        >
          Seu feedback foi enviado com sucesso!
        </span>
      )}
      {showingConfirmation && (
        <section
          ref={cakeRef}
          className={`flex pt-16 xs:pt-24 flex-col items-center justify-center relative `}
        >
          <Cake />
          <Confetti className=" w-[286px] xs:w-[320px] md:w-[488px] h-[296px]" />
        </section>
      )}
    </form>
  );
};

const Cake = () => {
  return (
    <div className="cake">
      <div className="plate"></div>
      <div className="layer layer-bottom"></div>
      <div className="layer layer-middle"></div>
      <div className="layer layer-top"></div>
      <div className="icing"></div>
      <div className="drip drip1"></div>
      <div className="drip drip2"></div>
      <div className="drip drip3"></div>
      <div className="candle">
        <div className="flame"></div>
      </div>
    </div>
  );
};
