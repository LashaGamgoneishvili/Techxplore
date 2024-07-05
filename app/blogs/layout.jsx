import { Metadata } from "next";

export const metadata = {
  title: { absolute: "Blogs" },
  description: "Read interesting blogs about our product",
};
function GoogleFontLayout({ children }) {
  return <div>{children}</div>;
}

export default GoogleFontLayout;
