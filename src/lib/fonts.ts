import { Cormorant_Garamond, Manrope } from "next/font/google";

export const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});
