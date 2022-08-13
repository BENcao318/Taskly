import React from "react";
import { Button, Dropdown } from "flowbite-react";
import { ReactComponent as PaperAirplane } from "../assets/PaperAirplane.svg";
import { TaskList } from "../components/TaskList";

export function TaskOverview(props) {
  const { assignedTasks } = props;

  return (
    <div className="w-1/4 h-full p-4 border-l border-neutral-200">
      <p className="my-2 text-xl font-bold text-gray-900">Overview of Tasks</p>
      {assignedTasks.map((task) => {
        return (
          <TaskList
            key={task.task_id}
            complete={task.completed}
            taskTitle={task["task.form_json_data"]["title"]}
          />
        );
      })}
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
