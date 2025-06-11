"use client";

import { Button } from "@heroui/button";

function Sidebar({ userRole }) {
  return (
    <div className="flex flex-col mx-auto mt-5 overflow-y-auto">
      <Button className="bg-slate-500 mb-3 min-h-10 focus:bg-slate-700 focus:outline-2 focus:outline-black">
        Project 1
      </Button>
      <Button
        className={`bg-cyan-500 border-1 border-black mt-4 mb-4 min-h-10 ${
          userRole === "viewer" ? "hidden" : ""
        }`}
      >
        Add new project
      </Button>
    </div>
  );
}

export default Sidebar;
