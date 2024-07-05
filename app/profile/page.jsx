// import { getUserInfo } from "../../action";
import UserProfile from "../../components/profile/UserProfile";

export const metadata = {
  title: { absolute: "Profile Details" },
  description: "See All information about User",
};

export default async function Profile() {
  // const response = await getUserInfo();
  // const data = await response.json();
  // console.log(data)
  return <UserProfile />;
}
