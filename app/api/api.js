export async function updateUser(user) {
  return await fetch(`${BASE_URL}/api/user-api/update-user`, {
    method: "POST",
    body: JSON.stringify({ user }),
  });
}
