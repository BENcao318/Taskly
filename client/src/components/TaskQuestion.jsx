import React from "react";
import { Card } from "flowbite-react";
import { ReactComponent as Incomplete } from "../assets/incomplete.svg";

export function TaskQuestion(props) {
  const { taskTitle, form } = props;

  return (
    <div className="mb-2">
      <Card>
        <div className="flex justify-start items-center">
          <Incomplete className="h-6 mr-3 sm:h-9" alt="Incomplete Icon" />
          <span className="text-lg font-medium text-gray-900 my-0">
            {taskTitle}
          </span>
        </div>
        <p className="text-base font-normal text-gray-500 text">{form}</p>
      </Card>
    </div>
  );
}
