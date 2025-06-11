"use client";

import Sidebar from "@/components/Sidebar";
import { handleLogout } from "@/lib/handleLogout";
import { Button } from "@heroui/button";
import { useUserFromCookie } from "@/lib/useUserFromCookie";
import MainTaskbar from "@/components/MainTaskbar";
import {
  Card,
  Form,
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
                  <span className="text-blue-700">{user.name}</span> as{" "}
                  {user.role}
                </p>
                <Form action={handleLogout} className="mr-15 mt-[-13px]">
                  <Button
                    type="submit"
                    className="text-red-800 font-bold bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg max-md:hidden"
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
                      className="text-red-800 font-bold bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg"
                    >
                      Logout
                    </Button>
                  </Form>
                </NavbarMenuItem>
                <NavbarMenuItem className="mb-4">
                  <Sidebar userRole={user.role} />
                </NavbarMenuItem>
              </NavbarMenu>
            </Navbar>
            <div className="ml-3 w-full mt-10 h-[calc(100vh-136px)]">
              <MainTaskbar userRole={user.role} />
            </div>
          </div>
          <Card
            isBlurred
            shadow="sm"
            className="h-screen w-2/12 flex shrink-0 bg-neutral-600/20 border-l-1 border-neutral-400/20 shadow-xl min-w-[13rem] max-md:hidden ml-6"
          >
            <Sidebar userRole={user.role} />
          </Card>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
