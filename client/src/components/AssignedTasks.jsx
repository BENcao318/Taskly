import React from "react";
import { TaskQuestion } from "../components/TaskQuestion";
import { TaskResponse } from "../components/TaskResponse";

export function AssignedTasks(props) {
  const { summary, phoneNumber, email } = props;

  return (
    <div className="w-2/4 h-full bg-gray-50 p-4">
      <p className="my-2 text-xl font-bold text-gray-900">Assigned Tasks</p>
      <TaskQuestion
        taskTitle={"This is an example of an outstanding task."}
        form={"This will be a SurveyJS form conponent"}
      />
      <TaskResponse
        taskTitle={"This is an example of an outstanding task."}
        form={"This will be a SurveyJS form conponent"}
      />
    </div>
  );
}
