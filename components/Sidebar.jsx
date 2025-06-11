"use client";

import { Button } from "@heroui/button";

function Sidebar({ userRole }) {
  return (
    <div className="flex flex-col mx-auto mt-5 overflow-y-auto">
      <Button color="primary" className=" mb-3 min-h-10">
        Project 1
      </Button>
      <Button
        color="secondary"
        className={`border-1 mt-4 mb-4 min-h-10 border-none ${
          userRole === "viewer" ? "hidden" : ""
        }`}
      >
        Add new project
      </Button>
    </div>
  );
}

export default Sidebar;
