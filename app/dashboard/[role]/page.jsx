"use client";

import Sidebar from "@/components/Sidebar";
import { handleLogout } from "@/lib/handleLogout";
import { Button } from "@heroui/button";
import { useUserFromCookie } from "@/lib/useUserFromCookie";
import MainTaskbar from "@/components/MainTaskbar";

export default function Dashboard() {
  const user = useUserFromCookie();

  console.log(user);

  return (
    <div>
      {user ? (
        <div className="flex items-start">
          <div className="flex flex-col mt-10 w-10/12 max-sm:w-full">
            <div className="flex items-center justify-between w-full">
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
            <div className="w-full bg-pink-400 mt-10 h-[calc(100vh-136px)]">
              <MainTaskbar />
            </div>
          </div>
          <div className="h-screen bg-indigo-500 w-2/12 flex shrink-0  border-l-2 border-l-black shadow-xl min-w-[13rem] max-sm:hidden">
            <Sidebar />
          </div>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
