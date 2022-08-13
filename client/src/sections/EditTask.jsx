import { Fragment } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import * as Survey from "survey-core";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import "../surveyJs.css";

const creatorOptions = {
  showLogicTab: false,
  isAutoSave: false,
  showJSONEditorTab: false,
  allowChangeThemeInPreview: false,
  allowEditExpressionsInTextEditor: false,
  showInvisibleElementsInPreviewTab: false,
  showSimulatorInPreviewTab: false,
  showPreviewTab: false,
  pageEditMode: "single",
  allowModifyPages: false,
  questionTypes: [
    "text",
    "checkbox",
    "radiogroup",
    "ranking",
    "radiogroup",
    "dropdown",
    "comment",
    "rating",
    "boolean",
    "html",
    "file",
    "matrix",
    "matrixdropdown",
    "matrixdynamic",
    "signaturepad",
  ],
};

Survey.Serializer.findProperty("survey", "description").visible = false;
Survey.Serializer.findProperty("survey", "logo").visible = false;
Survey.Serializer.findProperty("survey", "title").isRequired = true;

const defaultJson = {
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

export function EditTask() {
  const creator = new SurveyCreator(creatorOptions);
  creator.text = JSON.stringify(defaultJson);
  creator.saveSurveyFunc = (saveNo, callback) => {
    callback(saveNo, true);
  };
  return (
    <Fragment>
      <div className="flex-col w-full h-screen">
        <p className="mt-6 mx-6 text-2xl font-semibold text-gray-900">
          Edit task
        </p>
        <SurveyCreatorComponent creator={creator} />
      </div>
    </Fragment>
  );
}