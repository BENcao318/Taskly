import { useCallback, useEffect, useState } from "react";
import serverAPI from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import "survey-core/modern.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../surveyJs.css";

export function PreviewTask() {
  const { task_id } = useParams();
  const [task, setTask] = useState([]);

  useEffect(() => {
    serverAPI
      .get(`/tasks/find?task_id=${task_id}`)
      .then((response) => {
        if (response.data.success) {
          setTask(response.data.taskData[0].form_json_data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const survey = new Model(task);
  survey.focusFirstQuestionAutomatic = false;
  survey.showTitle = false;

  const saveResults = useCallback((sender) => {
    alert("Error: you cannot complete a task while in preview mode");
  }, []);

  survey.onComplete.add(saveResults);

  return (
    <div className="flex-col w-full h-screen">
      <p className="mt-6 mx-6 text-2xl font-semibold text-gray-900">
        {task.title}
      </p>
      <div className="flex w-full h-screen">
        <Survey model={survey} />
      </div>
    </div>
  );
}
