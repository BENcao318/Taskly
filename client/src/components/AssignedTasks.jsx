import React from "react";
import { TaskQuestion } from "../components/TaskQuestion";
import { TaskResponse } from "../components/TaskResponse";
import { LoadSurvey } from "./LoadSurvey";
import { Card } from "flowbite-react";
import { ReactComponent as Incomplete } from "../assets/incomplete.svg";

export function AssignedTasks(props) {
  const { summary, phoneNumber, email } = props;

  return (
    <div className="w-2/4 h-full bg-gray-50 p-4">
      <p className="my-2 text-xl font-bold text-gray-900">Assigned Tasks</p>
      <div className="mb-2">
        <Card>
          <div className="flex justify-start items-center">
            <Incomplete className="h-6 mr-3 sm:h-9" alt="Complete Icon" />
            <span className="text-lg font-medium text-gray-900 my-0">
              Example of outstanding task
            </span>
          </div>
          <LoadSurvey />
        </Card>
      </div>

      <TaskResponse
        taskTitle={"This is an example of an outstanding task."}
        form={"This will be a SurveyJS form conponent"}
      />
    </div>
  );
}
