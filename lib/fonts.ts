import {
  Cormorant_Garamond,
  DM_Sans,
  Geist,
  Geist_Mono,
  Inter,
  Lato,
  Libre_Baskerville,
  Montserrat,
  Mulish,
  Playfair,
  Playfair_Display,
  Poppins,
  Roboto,
  Source_Sans_3,
  Work_Sans,
} from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Theme fonts
export const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});
export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

// Additional theme fonts
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const sourceSansPro = Source_Sans_3({
  variable: "--font-source-sans-pro",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const mulish = Mulish({ variable: "--font-mulish", subsets: ["latin"] });

// Combine all font variable class names
export const fontVariables = [
  geistSans.variable,
  geistMono.variable,
  playfair.variable,
  playfairDisplay.variable,
  lato.variable,
  poppins.variable,
  inter.variable,
  montserrat.variable,
  roboto.variable,
  sourceSansPro.variable,
  cormorantGaramond.variable,
  workSans.variable,
  dmSans.variable,
  libreBaskerville.variable,
  mulish.variable,
].join(" ");
