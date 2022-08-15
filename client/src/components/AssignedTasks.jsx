import React from "react";
import { TaskResponse } from "../components/TaskResponse";
import { LoadSurvey } from "./LoadSurvey";

export function AssignedTasks(props) {
  const { assignedTasks, client, completedTasks } = props;

  return (
    <div className="w-full h-full p-10">
      {assignedTasks.map((task) => {
        if (!task.completed) {
          return (
            <LoadSurvey
              surveyJson={task["task.form_json_data"]}
              task_id={task.task_id}
              key={task.task_id}
              client={client}
              id={task.id}
            />
          );
        }
      })}
      {completedTasks.map((task) => {
        return (
          <TaskResponse
            copy_of_survey_json={task["copy_of_survey_json"]}
            responseData={task["response_json_data"]}
            key={task["assigned_task_id"]}
            id={task["assigned_task_id"]}
          />
        );
      })}
    </div>
  );
}
