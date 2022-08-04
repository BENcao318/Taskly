import React from "react";
import { Button, Dropdown } from "flowbite-react";
import { ReactComponent as PaperAirplane } from "../assets/PaperAirplane.svg";
import { TaskList } from "../components/TaskList";

export function TaskOverview(props) {
  const { taskTitle, form } = props;

  return (
    <div className="w-1/4 h-full bg-gray-50 p-4 border-l border-neutral-200">
      <p className="my-2 text-xl font-bold text-gray-900">Overview of Tasks</p>
      <TaskList outstanding={true} />
      <TaskList complete={true} />
      <hr className="my-2" />
      <div className="flex flex-col items-center">
        <Button>
          <PaperAirplane className="mr-2 h-5 w-5" />
          Send Tasks to Client
        </Button>
        <hr className="my-1 border-none" />
        <Dropdown label="Actions" color="light" size="md"></Dropdown>
      </div>
    </div>
  );
}
