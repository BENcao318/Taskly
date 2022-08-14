import { useCallback } from "react";
import "survey-core/modern.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../surveyJs.css";

const surveyJson = {
  title: "Study Abroad Assesment",
  logoPosition: "right",
  elements: [
    {
      type: "text",
      name: "question2",
      title: "How old are you?",
      isRequired: true,
    },
    {
      type: "text",
      name: "question3",
      title: "What is your highest form of education?",
      isRequired: true,
    },
    {
      type: "text",
      name: "question4",
      title: "What country are you currently located in?",
      isRequired: true,
    },
    {
      type: "text",
      name: "question5",
      title: "Where would you like to study?",
      isRequired: true,
    },
    {
      type: "dropdown",
      name: "question1",
      title: "What program level are you interested in studying?",
      isRequired: true,
      choices: [
        {
          value: "item1",
          text: "Preschool - Grade 12",
        },
        {
          value: "item2",
          text: "University Undergrad",
        },
        {
          value: "item3",
          text: "College Undergrad",
        },
        {
          value: "item4",
          text: "Masters",
        },
      ],
    },
    {
      type: "text",
      name: "question6",
      title: "What is your maximum budget for annual tuition costs?",
      isRequired: true,
    },
    {
      type: "text",
      name: "question7",
      title: "Additional comments related to your study plans/ goals.",
    },
  ],
};

export function PreviewTask() {
  const survey = new Model(surveyJson);

  survey.focusFirstQuestionAutomatic = false;
  survey.showTitle = false;

  const saveResults = useCallback((sender) => {
    alert("Error: you cannot complete a task while in preview mode");
  }, []);

  survey.onComplete.add(saveResults);

  return (
    <div className="flex-col w-full h-screen">
      <p className="mt-6 mx-6 text-2xl font-semibold text-gray-900">
        Preview task
      </p>
      <div className="flex w-full h-screen">
        <Survey model={survey} />
      </div>
    </div>
  );
}
