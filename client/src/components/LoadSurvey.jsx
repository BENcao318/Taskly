import { useCallback } from "react";
import { Card } from "flowbite-react";
import { ReactComponent as Incomplete } from "../assets/incomplete.svg";
import "survey-core/modern.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../surveyJs.css";
import serverAPI from "../hooks/useAxios";

export function LoadSurvey(props) {
  const { surveyJson, task_id, id } = props;
  const survey = new Model(surveyJson);

  survey.focusFirstQuestionAutomatic = false;
  survey.showTitle = false;

  const saveResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    serverAPI
      .post("/tasks/completed/new", {
        assigned_task_id: task_id,
        response_json_data: results,
      })
      .then((response) => {
        if (response && response.data.success) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log("Error!");
      });
  }, []);

  survey.onComplete.add(saveResults);

  return (
    <div className="mb-2" id={id}>
      <Card>
        <div className="flex justify-start items-center">
          <Incomplete className="h-6 mr-3 sm:h-9" alt="Complete Icon" />
          <span className="text-lg font-medium text-gray-900 my-0">
            {surveyJson.title}
          </span>
        </div>
        <Survey model={survey} />
      </Card>
    </div>
  );
}
