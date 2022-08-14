import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import serverAPI from "../hooks/useAxios";
import * as Survey from "survey-core";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
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
  pages: [
    {
      name: "Name",
      elements: [
        {
          name: "FirstName",
          title: "Enter your first name:",
          type: "text",
        },
        {
          name: "LastName",
          title: "Enter your last name:",
          type: "text",
        },
      ],
    },
  ],
};

export function EditTask() {
  const { task_id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    serverAPI
      .get(`/tasks/find?task_id=${task_id}`)
      .then((response) => {
        if (response.data.success) {
          setTask(response.data.taskData[0].form_json_data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const creator = new SurveyCreator(creatorOptions);
  creator.text = JSON.stringify(defaultJson);
  creator.saveSurveyFunc = (saveNo, callback) => {
    callback(saveNo, true);
  };
  return <SurveyCreatorComponent creator={creator} />;
}
