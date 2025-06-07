import { Button, Input, Form } from "@heroui/react";
import PasswordInput from "@/components/passwordInput";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const password = formData.get("password");
    console.log(name);
    console.log(password);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6 border-2 border-purple-800 border-dashed shadow-2xl">
        <p className="pb-4 text-left text-3xl font-semibold">
          Log In
          <span aria-label="emoji" className="ml-2" role="img">
            👋
          </span>
        </p>
        <Form
          className="flex flex-col gap-4"
          validationBehavior="native"
          onSubmit={handleSubmit}
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
          <PasswordInput />

          <Button className="w-full mt-10" color="primary" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
}
