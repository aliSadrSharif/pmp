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
    <main>
      {user ? (
        <div>
          <div className="flex items-center mt-10 justify-between">
            <p className="ml-10 font-bold">
              <span className="text-orange-700">{user.name}</span> as{" "}
              {user.role}
            </p>
            <Form action={handleLogout} className="mr-15">
              <Button
                type="submit"
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
              >
                Logout
              </Button>
            </Form>
          </div>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </main>
  );
}

export async function handleLogout() {
  "use server";
  cookies().delete("foundUser");
  redirect("/");
}
