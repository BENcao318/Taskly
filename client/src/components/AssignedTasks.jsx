import React from "react";
import { TaskResponse } from "../components/TaskResponse";
import { LoadSurvey } from "./LoadSurvey";

export function AssignedTasks(props) {
  const { assignedTasks, completedTasks } = props;

  console.log(completedTasks);

  return (
    <div className="w-2/4 h-full p-4">
      <p className="my-2 text-xl font-bold text-gray-900">Assigned Tasks</p>
      {assignedTasks.map((task) => {
        if (!task.completed) {
          return (
            <LoadSurvey
              surveyJson={task["task.form_json_data"]}
              assignedTaskId={task.id}
              key={task.task_id}
            />
          );
        }
      })}
      {completedTasks.map((task) => {
        return (
          <TaskResponse
            surveyJson={task["copy_of_survey_json"]}
            responseData={task["response_json_data"]}
            key={task["assigned_task_id"]}
          />
        );
      })}
    </div>
  );
}
