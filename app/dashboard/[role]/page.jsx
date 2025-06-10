"use client";

import Sidebar from "@/components/Sidebar";
import { handleLogout } from "@/lib/handleLogout";
import { Button } from "@heroui/button";
import { useUserFromCookie } from "@/lib/useUserFromCookie";
import MainTaskbar from "@/components/MainTaskbar";
import {
  Form,
  Link,
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";

export default function Dashboard() {
  const user = useUserFromCookie();

  console.log(user);

  return (
    <div>
      {user ? (
        <div className="flex items-start">
          <div className="flex flex-col mt-10 w-10/12 max-md:w-full">
            <Navbar isBlurred={false} className="bg-transparent h-[8vh]">
              <div className="flex items-center justify-between w-full">
                <p className="font-bold ml-10">
                  <span className="text-orange-800">{user.name}</span> as{" "}
                  {user.role}
                </p>
                <Form action={handleLogout} className="mr-15 mt-[-13px]">
                  <Button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded max-md:hidden"
                  >
                    Logout
                  </Button>
                </Form>
              </div>

              <NavbarMenuToggle className="text-default-400 md:hidden" />

              <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 mt-[-70px] pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
                <NavbarMenuItem className="mt-25">
                  <Form action={handleLogout}>
                    <Button
                      type="submit"
                      fullWidth
                      className="bg-red-600 text-white font-bold"
                    >
                      Logout
                    </Button>
                  </Form>
                </NavbarMenuItem>
                <NavbarMenuItem className="mb-4">
                  <Sidebar />
                </NavbarMenuItem>
              </NavbarMenu>
            </Navbar>
            <div className="w-full bg-pink-400 mt-10 h-[calc(100vh-136px)]">
              <MainTaskbar />
            </div>
          </div>
          <div className="h-screen bg-indigo-500 w-2/12 flex shrink-0  border-l-2 border-l-black shadow-xl min-w-[13rem] max-md:hidden">
            <Sidebar />
          </div>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
