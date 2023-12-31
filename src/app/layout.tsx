import "@/app/styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import * as fonts from "../font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontArray: any = Object.values(fonts);
  const fontVariables: any = fontArray.map((font: { variable: any }) => {
    return font.variable;
  });
  const fontClass: any = fontVariables.toString().replace(/,/g, " ");

  return (
    <html lang="en" className={fontClass}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
