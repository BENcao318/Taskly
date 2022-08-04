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

// Survey.Serializer.findProperty("survey", "title").visible = false;
Survey.Serializer.findProperty("survey", "description").visible = false;
Survey.Serializer.findProperty("survey", "logo").visible = false;

// const defaultJson = {
//   pages: [
//     {
//       name: "Name",
//       elements: [
//         {
//           name: "FirstName",
//           title: "Enter your first name:",
//           type: "text",
//         },
//         {
//           name: "LastName",
//           title: "Enter your last name:",
//           type: "text",
//         },
//       ],
//     },
//   ],
// };

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  // creator.text = window.localStorage.getItem("survey-json") || JSON.stringify();
  creator.saveSurveyFunc = (saveNo, callback) => {
    // window.localStorage.setItem("survey-json", creator.text);
    // callback(saveNo, true);
    alert(creator.text);
    // saveSurveyJson(
    //     "https://your-web-service.com/",
    //     creator.JSON,
    //     saveNo,
    //     callback
    // );
  };
  return <SurveyCreatorComponent creator={creator} />;
}

// function saveSurveyJson(url, json, saveNo, callback) {
//   const request = new XMLHttpRequest();
//   request.open('POST', url);
//   request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//   request.addEventListener('load', () => {
//       callback(saveNo, true);
//   });
//   request.addEventListener('error', () => {
//       callback(saveNo, false);
//   });
//   request.send(JSON.stringify(json));
// }
