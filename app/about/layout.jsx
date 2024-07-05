import ExtraDetails from "../../components/mainpage/ExtraDetails";
// import Video from "@/components/mainPage/Video";

export const metadata = {
  title: { absolute: "About" },
  description: "Learn more about Rolex",
};
function GoogleFontLayout({ children }) {
  return (
    <div>
      {children}
      <ExtraDetails />
    </div>
  );
}

export default GoogleFontLayout;
