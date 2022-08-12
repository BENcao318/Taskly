import React from "react";
import { TaskResponse } from "../components/TaskResponse";
import { LoadSurvey } from "./LoadSurvey";

export function AssignedTasks(props) {
  const { assignedTasks } = props;

  return (
    <div className="w-2/4 h-full p-4">
      <p className="my-2 text-xl font-bold text-gray-900">Assigned Tasks</p>
      {assignedTasks.map((task) => {
        return (
          <LoadSurvey
            surveyJson={task["task.form_json_data"]}
            key={task.task_id}
          />
        );
      })}
      <TaskResponse
        taskTitle={"This is an example of an outstanding task."}
        form={"This will be a SurveyJS form conponent"}
      />
    </div>
  );
}
