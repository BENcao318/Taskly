import React from "react";
import { TaskResponse } from "../components/TaskResponse";
import { LoadSurvey } from "./LoadSurvey";

export function AssignedTasks(props) {
  const { assignedTasks, client } = props;

  return (
    <div className="w-2/4 h-full p-4">
      <p className="my-2 text-xl font-bold text-gray-900">Assigned Tasks</p>
      {assignedTasks.map((task) => {
        if (!task.completed) {
          return (
            <LoadSurvey
              surveyJson={task["task.form_json_data"]}
              key={task.task_id}
              client={client}
            />
          );
        } else {
          return (
            <TaskResponse
              surveyJson={task["task.form_json_data"]}
              key={task.task_id}
            />
          );
        }
      })}
    </div>
  );
}
