import { users } from "@/lib/localStorage";
import { Form, Select, SelectItem, Textarea } from "@heroui/react";
import { DatePicker } from "@heroui/react";
import React from "react";

function Tasks({ userRole }) {
  return (
    <Form className="bg-neutral-800/10 w-full h-[20%] mt-2 flex flex-row justify-around items-center overflow-x-auto shrink-0 max-md:flex-col max-md:h-full max-md:mt-0 max-md:w-6/12">
      <div>
        <Textarea
          aria-label
          isReadOnly={userRole === "viewer"}
          color="primary"
          placeholder="title"
          type="text"
          disableAutosize
          className="max-w-20 w-20 max-h-11 overflow-y-auto"
        />
      </div>
      <div>
        <Textarea
          aria-label
          isReadOnly={userRole === "viewer"}
          color="primary"
          placeholder="description"
          type="text"
          disableAutosize
          className="max-w-90 w-90 max-h-11 overflow-y-auto max-md:max-w-30"
        />
      </div>
      <div className="h-10">
        <Select
          isDisabled={userRole === "viewer"}
          aria-label
          className="w-30"
          size="md"
          placeholder="Assign"
          color="primary"
        >
          {users.map((user) => (
            <SelectItem key={user.id}>{user.name}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="h-10">
        <Select
          aria-label
          isDisabled={userRole === "viewer"}
          className="w-31"
          size="md"
          placeholder="Status"
          color="primary"
        >
          <SelectItem>draft</SelectItem>
          <SelectItem>in progress</SelectItem>
          <SelectItem>succes</SelectItem>
          <SelectItem>failed</SelectItem>
        </Select>
      </div>
      <div>
        <DatePicker
          aria-label
          isDisabled={userRole === "viewer"}
          color="primary"
          size="sm"
          radius="full"
          className="max-w-[130px]"
        />
      </div>
      <div className="h-10">
        <Select
          aria-label
          className="w-30"
          size="md"
          placeholder="Reporter"
          color="primary"
          isDisabled={userRole === "viewer"}
        >
          {users.map((user) => (
            <SelectItem key={user.id}>{user.name}</SelectItem>
          ))}
        </Select>
      </div>
    </Form>
  );
}

export default Tasks;
