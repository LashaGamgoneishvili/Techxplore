import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import StickyHeader from "../components/StickyHeader";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  variable: "--poppins-font",
});

export const metadata = {
  title: { default: "Qwizard", template: "%s | Qwizard " },
  description: "Don't waste your time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <StickyHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
