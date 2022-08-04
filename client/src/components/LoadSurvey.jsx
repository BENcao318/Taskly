import { useCallback } from "react";

import "survey-core/modern.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../surveyJs.css";

const surveyJson = {
  title: "Test Survey",
  logoPosition: "right",
  elements: [
    {
      type: "text",
      name: "question1",
      title: "This is a mandatory input field",
      isRequired: true,
    },
    {
      type: "rating",
      name: "question2",
      title: "This is an optional rating",
    },
    {
      type: "signaturepad",
      name: "question3",
      title: "This is a mandatory signature",
      isRequired: true,
    },
  ],
};

export function LoadSurvey() {
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;
  survey.showTitle = false;
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}
