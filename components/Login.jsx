import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Form } from "@heroui/form";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { users } from "@/lib/localStorage";

export default function Component() {
  const handleSubmit = async (formData) => {
    "use server";
    const name = formData.get("name");
    const password = formData.get("password");
    const user = users.find((u) => u.name === name && u.password === password);
    if (user) {
      cookies().set("foundUser", JSON.stringify(user), { path: "/" });
      redirect(`/dashboard/${user.name}?role:${user.role}`);
    } else {
      console.log("User not found");
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6 border-2 border-dashed border-purple-700 mt-25">
        <p className="pb-4 text-left text-3xl font-semibold">
          Log In
          <span aria-label="emoji" className="ml-2" role="img">
            👋
          </span>
        </p>
        <Form
          className="flex flex-col gap-4"
          validationBehavior="native"
          action={handleSubmit}
        >
          <Input
            isRequired
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter your name"
            type="name"
            variant="bordered"
          />

          <Input
            isRequired
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
          />

          <Button className="w-full mt-10" color="primary" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
}
