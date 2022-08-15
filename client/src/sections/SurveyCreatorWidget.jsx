import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import * as Survey from "survey-core";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import serverAPI from "../hooks/useAxios";
import "../surveyJs.css";
import { taskContext } from "../context/TaskContext";
import { authContext } from "../context/AuthContext";

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
    "matrix",
    "matrixdropdown",
    "matrixdynamic",
  ],
};

Survey.Serializer.findProperty("survey", "description").visible = false;
Survey.Serializer.findProperty("survey", "logo").visible = false;
Survey.Serializer.findProperty("survey", "title").isRequired = true;

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
  const { setTasks } = useContext(taskContext);
  const { auth } = useContext(authContext);
  // creator.text = window.localStorage.getItem("survey-json") || JSON.stringify();
  creator.saveSurveyFunc = (saveNo, callback) => {
    let surveyJSON = JSON.parse(creator.text);
    if (surveyJSON.title) {
      serverAPI
        .post("/tasks/new", {
          form_json_data: JSON.parse(creator.text),
        })
        .then((response) => {
          if (response && response.data.success) {
            serverAPI
              .get(`/tasks?user=${auth.user.email}`)
              .then((response) => {
                if (response.data.success) {
                  setTasks(response.data.taskData);
                }
              })
              .catch((err) => {
                console.log(err);
              });
            navigate("/task");
          }
        })
        .catch((err) => {
          console.log("Error!");
        });
    }
  };
  return (
    <Fragment>
      <div className="flex-col w-full h-screen">
        <p className="mx-6 mt-6 text-2xl font-semibold text-gray-900">
          Add task
        </p>
        <SurveyCreatorComponent creator={creator} />
      </div>
    </Fragment>
  );
}
