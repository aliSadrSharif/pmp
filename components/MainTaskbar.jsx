import { Button } from "@heroui/button";
import React from "react";

function MainTaskbar() {
  return (
    <div className="flex gap-2 h-10/12 ml-10 w-full">
      <div className="max-w-10/12 w-full bg-amber-400 flex flex-col rounded-2xl h-[70vh]">
        <div className="flex bg-red-500 max-w-full h-[16%] rounded-t-2xl items-center px-4 overflow-x-auto justify-start gap-4">
          <Button className=" bg-green-300 font-bold max-h-13 h-13 mb-[-7px] border-1 border-black rounded-t-2xl focus:bg-green-500 min-w-14">
            Tab 1
          </Button>
          <Button
            className=" bg-amber-700 w-10 h-10 rounded-full font-bold text-xl mt-3 shadow-2xl grow-0 shrink-0 md:hidden"
            isIconOnly
            radius="full"
          >
            <span className="mt-[-5px]">+</span>
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
        <div className="bg-black mt-2 h-full flex flex-col items-center overflow-y-auto">
          <div className="bg-gray-400 w-full h-[13%] mt-2 flex justify-between items-center overflow-x-auto shrink-0"></div>
          <div className="h-10 mb-10">
            <Button className="mt-4 mx-3 font-bold h-10 flex ">
              + Add new task
            </Button>
          </div>
        </div>
      </div>
      <Button
        className=" bg-amber-700 w-10 h-10 rounded-full font-bold text-xl mt-3 shadow-2xl grow-0 shrink-0 max-md:hidden"
        isIconOnly
        radius="full"
      >
        <span className="mt-[-5px]">+</span>
      </Button>
    </div>
  );
}

export default MainTaskbar;
