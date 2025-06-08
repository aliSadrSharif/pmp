import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const cookieStore = cookies();
  const foundUser = cookieStore.get("foundUser")?.value;

  const user = foundUser ? JSON.parse(foundUser) : null;

  console.log("User on dashboard page:", user);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Test Page</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Your role: {user.role}</p>
          {/* Logout button */}
          <form action={handleLogout}>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            >
              Logout
            </button>
          </form>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}

export async function handleLogout() {
  "use server";
  cookies().delete("foundUser");
  redirect("/");
}
