"use server";
export async function updateUserAction(updateProfile) {
  revalidatePath(`${BASE_URL}/user`);

  const result = profileEdit.safeParse(updateProfile);
  console.log("result-1", result);
  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      return (errorMessage =
        errorMessage + issue.path[0] + ": " + issue.message + ". ");
    });

    return { error: errorMessage };
  }

  try {
    const response = await updateUser(result.data);
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
    return { message: "Error During updating user" };
  }
}

export async function getUserInfo() {
  const userImage = await fetch(
    `${BASE_URL}/api/user-api/get-user-image/${id}`,
    {
      cache: "no-store",
    }
  );
  const userImageInfo = await userImage.json();
  const imageUrl = userImageInfo.userImage?.rows[0].image;

  return imageUrl;
}
