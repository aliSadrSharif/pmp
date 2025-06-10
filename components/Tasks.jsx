import { Progress } from "@heroui/react";
import { DatePicker } from "@heroui/react";
import { Button } from "@heroui/button";
import React from "react";

function Tasks() {
  return (
    <div className="bg-gray-400 w-full h-[13%] mt-2 flex justify-between items-center overflow-x-auto shrink-0 px-4">
      <div>title 1</div>
      <div className="max-w-30 overflow-y-auto">description 1</div>
      <div>ali sharif</div>
      <div className="w-15">
        <Progress
          className="max-w-md"
          color="primary"
          showValueLabel={true}
          size="sm"
          value={50}
        />
      </div>
      <div>
        <DatePicker
          color="primary"
          variant="faded"
          size="sm"
          radius="full"
          className="max-w-[130px] "
        />
      </div>
      <div>Sobhan</div>
    </div>
  );
}

export default Tasks;
