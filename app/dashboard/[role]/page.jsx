import Sidebar from "@/components/Sidebar";
import { handleLogout } from "@/lib/handleLogout";
import { Button } from "@heroui/button";
import { cookies } from "next/headers";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const foundUser = cookieStore.get("foundUser")?.value;

  const user = foundUser ? JSON.parse(foundUser) : null;

  console.log("User on dashboard page:", user);

  return (
    <div>
      {user ? (
        <div className="flex items-start">
          <div className="flex items-center justify-between mt-10 w-9/12">
            <p className="font-bold ml-10">
              <span className="text-orange-800">{user.name}</span> as{" "}
              {user.role}
            </p>
            <form action={handleLogout} className="mr-15">
              <Button
                type="submit"
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
              >
                Logout
              </Button>
            </form>
          </div>
          <div className="h-screen bg-indigo-500 w-3/12">
            <Sidebar />
          </div>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
