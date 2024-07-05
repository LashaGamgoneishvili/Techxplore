// import { getBlogAction } from "../../../../../actions";
import MainBlogDetails from "../../../components/blog/MainBlogDetails";
// import { getUsers } from "../../../../api/api";
import { currUser } from "../../data";
import { blogData } from "../../data";
import { userData } from "../../data";

export const metadata = {
  title: { absolute: "Blog Details" },
};

export default async function Blog({ params }) {
  // const data = await getBlogAction(params.id);
  // const response = await getUsers();
  // const users = response.rows;

  return (
    <MainBlogDetails
      data={blogData}
      lastFiveCharacters={currUser.id}
      user={currUser}
      id={params.id}
      users={userData}
    />
  );
}
