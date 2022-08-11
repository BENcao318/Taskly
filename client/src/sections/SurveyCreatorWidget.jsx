import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import { useNavigate } from "react-router-dom";
import * as Survey from "survey-core";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import serverAPI from "../hooks/useAxios";
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
  const navigate = useNavigate();
  const creator = new SurveyCreator(creatorOptions);
  // creator.text = window.localStorage.getItem("survey-json") || JSON.stringify();
  creator.saveSurveyFunc = (saveNo, callback) => {
    alert(creator.text);
    serverAPI
      .post("/tasks/new", {
        // req.session.user.adminID
        admin_id: 1,
        form_json_data: JSON.parse(creator.text),
      })
      .then((response) => {
        if (response && response.data.success) {
          navigate("/task");
        }
      })
      .catch((err) => {
        console.log("Error!");
      });
  };
  return <SurveyCreatorComponent creator={creator} />;
}
