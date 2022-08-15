import React, { useRef } from "react";
import { ReactComponent as Complete } from "../assets/complete.svg";
import { ReactComponent as Incomplete } from "../assets/incomplete.svg";

export function TaskList(props) {
  const { complete, taskTitle, id } = props;
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      <a
        href={`#${id}`}
        className="text-base font-normal text-gray-500 text hover:underline hover:cursor-pointer"
      >
        {taskTitle}
      </a>
    </div>
  );
}
