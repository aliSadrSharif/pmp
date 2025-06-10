import React from "react";
import { Progress } from "@heroui/react";

export default function Progressbar() {
  return (
    <Progress
      aria-label="Downloading..."
      className="max-w-md"
      color="success"
      showValueLabel={true}
      size="md"
      value={50}
    />
  );
}
