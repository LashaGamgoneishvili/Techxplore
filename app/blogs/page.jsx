// import { getAllBlogAction, getUserAction } from "../../../../actions";
// import { getSession } from "@auth0/nextjs-auth0";
import MainBlogPage from "../../components/blog/MainBogPage";
import { blogData } from "../data";
import { currUser } from "../data";
import userImage from "../../public/Assets/21104.png";

// import { BlogPageObject, GetSessionUser } from "@/typings";

export default async function Blog() {
  // const data = await getAllBlogAction();
  // const userData = await getUserAction();
  // const userImage = userData?.image;
  // console.log("userData", userData);
  return (
    <MainBlogPage
      data={blogData}
      lastFiveCharacters={currUser.id}
      user={currUser}
      userImage={userImage}
    />
  );
}
