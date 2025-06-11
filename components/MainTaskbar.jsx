import { Button } from "@heroui/button";
import React from "react";
import Tasks from "./Tasks";
import { Card } from "@heroui/react";

function MainTaskbar({ userRole }) {
  return (
    <Card
      shadow="md"
      className="bg-neutral-600/20 flex gap-2 h-10/12 w-full border backdrop-blur-[1px] border-neutral-400/20"
    >
      <div className=" w-full  max-md:flex-row flex flex-col rounded-2xl h-[70vh] max-md:w-full">
        <div className="flex max-w-full h-[16%] rounded-t-2xl items-center px-4 overflow-x-auto max-md:flex-col max-md:h-full max-md:min-w-[16%] max-md:px-0 justify-start gap-4">
          <Button
            color="primary"
            className="font-bold max-h-13 h-13 border-1 rounded-t-2xl max-w-[70%] max-md:max-w-[50%]"
          >
            Tab 1
          </Button>
          {userRole === "admin" && (
            <Button
              color="secondary"
              className="w-10 h-10 rounded-full font-bold text-xl shadow-2xl grow-0 shrink-0"
              isIconOnly
              radius="full"
            >
              <span className="mt-[-5px]">+</span>
            </Button>
          )}
        </div>
        <div className="bg-neutral-800/20 w-full h-1/12 mt-5 flex justify-around items-center overflow-x-auto shrink-0 max-md:flex-col max-md:h-full max-md:w-[20%] max-md:mt-0 ">
          <span className="text-center font-bold text-sm max-md:font-medium max-md:text-xs md:ml-[-15px]">
            Title
          </span>
          <span className="text-center font-bold md:w-60 text-sm max-md:font-medium max-md:text-xs">
            Description
          </span>
          <span className="text-center font-bold text-sm max-md:font-medium max-md:text-xs md:ml-[40px]">
            Assign
          </span>
          <span className="text-center font-bold text-sm max-md:font-medium max-md:text-xs">
            Status
          </span>
          <span className="text-center font-bold text-sm max-md:font-medium max-md:text-xs">
            Deadline
          </span>
          <span className="text-center font-bold text-sm max-md:font-medium max-md:text-xs">
            Reporter
          </span>
        </div>
        <div className="mt-2 h-full flex flex-col items-center overflow-y-auto max-md:flex-row max-md:mt-0 max-md:w-full">
          <Tasks userRole={userRole} />

          <div className="h-10 mb-10">
            {userRole === "admin" && (
              <Button
                color="primary"
                className="mt-4 mx-3 font-bold h-10 flex "
              >
                + Add new task
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default MainTaskbar;
