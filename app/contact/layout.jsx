import { Metadata } from "next";
import Footer from "../../components/Footer";

export const metadata = {
  title: { absolute: "Contact" },
};
function GoogleFontLayout({ children }) {
  return <div className="h-screen w-full">{children}</div>;
}

export default GoogleFontLayout;
