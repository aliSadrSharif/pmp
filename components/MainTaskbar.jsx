import { Button } from "@heroui/button";
import React from "react";

function MainTaskbar() {
  return (
    <div className="flex gap-2 mt-10 mx-10 h-10/12 ">
      <div className="min-w-11/12 bg-amber-400 flex flex-col rounded-2xl">
        <div className="flex bg-red-500 w-full h-[13%] rounded-t-2xl items-center px-4">
          <Button className=" bg-green-300 font-bold py-7 border-1 border-black rounded-t-xl">
            Tab 1
          </Button>
        </div>
        <div className="bg-blue-500 w-full h-1/12 mt-5 flex justify-between items-center overflow-x-auto shrink-0">
          <span className="font-bold text-sm pl-4">Title</span>
          <span className="font-bold text-sm">Description</span>
          <span className="font-bold text-sm">Assign</span>
          <span className="font-bold text-sm">Status</span>
          <span className="font-bold text-sm">Deadline</span>
          <span className="font-bold text-sm pr-4">Reporter</span>
        </div>
        <div className="bg-gray-400 w-full h-1/12 mt-2 flex justify-between items-center overflow-x-auto shrink-0"></div>
        <Button className="mt-4 mx-3 font-bold">+ Add new task</Button>
      </div>
      <button className=" bg-amber-700 w-8 h-8 rounded-full font-bold text-xl mt-3 pb-4 shadow-2xl grow-0 shrink-0">
        +
      </button>
    </div>
  );
}

export default MainTaskbar;
