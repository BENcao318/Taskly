import React from "react";
import { Card } from "flowbite-react";
import { ReactComponent as Complete } from "../assets/complete.svg";

export function TaskResponse(props) {
  const { taskTitle, form } = props;

  return (
    <div className="mb-2">
      <Card>
        <div className="flex justify-start items-center">
          <Complete className="h-6 mr-3 sm:h-9" alt="Complete Icon" />
          <span className="text-lg font-medium text-gray-900 my-0">
            {taskTitle}
          </span>
        </div>
        <p className="text-base font-normal text-gray-500 text">{form}</p>
      </Card>
    </div>
  );
}
