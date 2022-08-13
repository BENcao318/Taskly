import React from "react";
import { ReactComponent as Complete } from "../assets/complete.svg";
import { ReactComponent as Incomplete } from "../assets/incomplete.svg";

export function TaskList(props) {
  const { complete, taskTitle } = props;
  let completionIcon;
  if (complete) {
    completionIcon = (
      <Complete className="h-6 mr-3 sm:h-9" alt="Complete Icon" />
    );
  } else {
    completionIcon = (
      <Incomplete className="h-6 mr-3 sm:h-9" alt="Incomplete Icon" />
    );
  }

  return (
    <div className="flex justify-start items-center">
      {completionIcon}
      <span className="text-base font-normal text-gray-500 text">
        {taskTitle}
      </span>
    </div>
  );
}
