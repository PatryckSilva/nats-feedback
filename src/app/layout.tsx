import { Providers } from "@/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { MainTemplate } from "@/template";
const myFont = localFont({ src: "../../public/fonts/CakeSans-Regular.ttf" });
export const metadata: Metadata = {
  title: "Nat doces",
  description: "Dê seu feedback para a Nat doces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${myFont.className} `}>
      <body>
        <MainTemplate>{children}</MainTemplate>
      </body>
    </html>
  );
}
