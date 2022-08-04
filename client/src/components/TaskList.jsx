import React from "react";
import { ReactComponent as Complete } from "../assets/complete.svg";
import { ReactComponent as Incomplete } from "../assets/incomplete.svg";

export function TaskList(props) {
  const { outstanding, complete } = props;

  return (
    <div className="flex justify-start items-center">
      {outstanding && (
        <Incomplete className="h-6 mr-3 sm:h-9" alt="Incomplete Icon" />
      )}
      {complete && <Complete className="h-6 mr-3 sm:h-9" alt="Complete Icon" />}
      <span className="text-base font-normal text-gray-500 text">
        Example of task list item.
      </span>
    </div>
  );
}
