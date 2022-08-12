import { useCallback } from "react";
import { Card } from "flowbite-react";
import { ReactComponent as Incomplete } from "../assets/incomplete.svg";
import "survey-core/modern.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../surveyJs.css";

export function LoadSurvey(props) {
  const { surveyJson } = props;
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;
  survey.showTitle = false;
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    console.log(results);
  }, []);

  survey.onComplete.add(function (result, options) {
    var data = [];
    for (var key in result.data) {
      var question = result.getQuestionByValueName(key);
      if (!question) continue;
      var questionResult = {
        name: key,
        value: result.data[key],
        title: question.title,
        displayValue: question.displayValue,
      };
      data.push(questionResult);
    }
    // console.log(JSON.stringify(questionResult));
  });

  return (
    <div className="mb-2">
      <Card>
        <div className="flex justify-start items-center">
          <Incomplete className="h-6 mr-3 sm:h-9" alt="Complete Icon" />
          <span className="text-lg font-medium text-gray-900 my-0">
            Example of outstanding task
          </span>
        </div>
        <Survey model={survey} />
      </Card>
    </div>
  );
}
