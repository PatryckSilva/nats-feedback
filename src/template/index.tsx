import { IChildren } from "@/@types";

import { Header } from "./header";

export const MainTemplate = ({ children }: IChildren) => {
  return (
    <main
      className={`flex flex-col items-center justify-center mt-28 md:mt-40`}
    >
      <Header />
      {children}
    </main>
  );
};
