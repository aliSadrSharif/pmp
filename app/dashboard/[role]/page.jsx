import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const foundUser = cookieStore.get("foundUser")?.value;

  const user = foundUser ? JSON.parse(foundUser) : null;

  console.log("User on dashboard page:", user);

  return (
    <div className="h-screen bg-gradient-to-tr from-blue-300 to-violet-300">
      <div className="flex flex-col items-center gap-4">
        <h1>Dashboard Page</h1>
        {user ? (
          <div>
            <p>Welcome, {user.name}!</p>
            <p>Your role: {user.role}</p>
            <Form action={handleLogout}>
              <Button
                type="submit"
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
              >
                Logout
              </Button>
            </Form>
          </div>
        ) : (
          <p>No user data found.</p>
        )}
      </div>
    </div>
  );
}

export async function handleLogout() {
  "use server";
  cookies().delete("foundUser");
  redirect("/");
}
