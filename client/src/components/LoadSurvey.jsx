import { useCallback } from "react";

import "survey-core/modern.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../surveyJs.css";

const surveyJson = {
  title: "Education Background",
  logoPosition: "right",
  elements: [
    {
      type: "text",
      name: "question2",
      title: "What is your GPA based on your most recent transcript.",
      isRequired: true,
    },
    {
      type: "checkbox",
      name: "question3",
      title: "Please select the areas of study that interest you.",
      isRequired: true,
      choices: [
        {
          value: "item1",
          text: "Science (General)",
        },
        {
          value: "item2",
          text: "Math",
        },
        {
          value: "item3",
          text: "Geography",
        },
        {
          value: "item4",
          text: "Politics",
        },
        {
          value: "item5",
          text: "Computer Science",
        },
        {
          value: "item6",
          text: "Chemistry",
        },
        {
          value: "item7",
          text: "Arts (General)",
        },
      ],
      hasOther: true,
    },
    {
      type: "text",
      name: "question1",
      title:
        "Is there any additional information we should know about your study goals? ",
    },
  ],
};

export function LoadSurvey() {
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

  return <Survey model={survey} />;
}
