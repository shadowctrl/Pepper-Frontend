import {
  Black_Ops_One,
  Poppins,
  Exo,
  Exo_2,
  Audiowide,
} from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const black_ops_one = Black_Ops_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-black-ops-one",
});
export const exo = Exo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-exo",
});
export const exo_2 = Exo_2({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-exo-2",
});
export const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-audiowide",
});

//-----------------------------------------------Local Fonts----------------------------------------------------

export const zaptron = localFont({
  src: "./assests/fonts/zaptron.otf",
  variable: "--font-zaptron",
});
export const proxon = localFont({
  src: "./assests/fonts/proxon.ttf",
  variable: "--font-proxon",
});
export const favter = localFont({
  src: "./assests/fonts/favter.ttf",
  variable: "--font-favter",
});
export const atomed = localFont({
  src: "./assests/fonts/atomed.ttf",
  variable: "--font-atomed",
});
export const angas = localFont({
  src: "./assests/fonts/angas.otf",
  variable: "--font-angas",
});
export const advanium = localFont({
  src: "./assests/fonts/advanium.ttf",
  variable: "--font-advanium",
});
export const acetone = localFont({
  src: "./assests/fonts/acetone.ttf",
  variable: "--font-acetone",
});
