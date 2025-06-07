"use client";

import { useState } from "react";
import { Input } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function PasswordInput() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      isRequired
      endContent={
        <button type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <Icon
              className="pointer-events-none text-2xl text-default-400"
              icon="solar:eye-closed-linear"
            />
          ) : (
            <Icon
              className="pointer-events-none text-2xl text-default-400"
              icon="solar:eye-bold"
            />
          )}
        </button>
      }
      label="Password"
      labelPlacement="outside"
      name="password"
      placeholder="Enter your password"
      type={isVisible ? "text" : "password"}
      variant="bordered"
    />
  );
}
