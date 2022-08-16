import { Card } from "flowbite-react";
import { ReactComponent as Complete } from "../assets/complete.svg";
import "survey-core/modern.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../surveyJs.css";

export function TaskResponse(props) {
  const { copy_of_survey_json, responseData, id } = props;
  const survey = new Model(copy_of_survey_json);

  survey.focusFirstQuestionAutomatic = false;
  survey.showTitle = false;
  survey.data = responseData;
  survey.mode = "display";

  return (
    <div className="mb-5 mx-10" id={id}>
      <Card>
        <div className="flex justify-start items-center">
          <Complete className="h-6 mr-3 sm:h-9" alt="Complete Icon" />
          <span className="text-lg font-medium text-gray-900 my-0">
            {copy_of_survey_json.title}
          </span>
        </div>
        <Survey model={survey} />
      </Card>
    </div>
  );
}
