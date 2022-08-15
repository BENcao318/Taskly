import { useCallback } from "react";
import { Card } from "flowbite-react";
import { ReactComponent as Incomplete } from "../assets/incomplete.svg";
import "survey-core/modern.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import serverAPI from "../hooks/useAxios";
import "../surveyJs.css";

export function LoadSurvey(props) {
  const { surveyJson, id } = props;
  const survey = new Model(surveyJson);

  survey.focusFirstQuestionAutomatic = false;
  survey.showTitle = false;

  const saveResults = useCallback((sender) => {
    const results = sender.data;
    serverAPI
      .post("/tasks/completed/new", {
        assigned_task_id: id,
        response_json_data: results,
        copy_of_survey_json: surveyJson,
      })
      .then((response) => {
        if (response && response.data.success) {
          console.log("Completed task data added to the db!");
        }
      })
      .catch((err) => {
        console.log("Error!");
      });

    serverAPI
      .post(`tasks/completed/update?assigned_task_id=${id}`)
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
    <div className="mb-5 mx-10" id={id}>
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
