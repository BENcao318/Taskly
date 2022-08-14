import { Card } from "flowbite-react";
import { ReactComponent as Complete } from "../assets/complete.svg";
import "survey-core/modern.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../surveyJs.css";

export function TaskResponse(props) {
  const { surveyJson, responseData } = props;
  const survey = new Model(surveyJson);

  survey.focusFirstQuestionAutomatic = false;
  survey.showTitle = false;
  survey.data = JSON.parse(responseData);
  survey.mode = "display";

  return (
    <div className="mb-2">
      <Card>
        <div className="flex justify-start items-center">
          <Complete className="h-6 mr-3 sm:h-9" alt="Complete Icon" />
          <span className="text-lg font-medium text-gray-900 my-0">
            {surveyJson.title}
          </span>
        </div>
        <Survey model={survey} />
      </Card>
    </div>
  );
}
