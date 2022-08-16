import { useCallback, useContext } from 'react'
import { Card } from 'flowbite-react'
import { ReactComponent as Incomplete } from '../assets/incomplete.svg'
import 'survey-core/modern.min.css'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import serverAPI from '../hooks/useAxios'
import '../surveyJs.css'
import { taskContext } from '../context/TaskContext'

export function LoadSurvey(props) {
  const { surveyJson, id, uuid, setCompletedTasks } = props
  const { setAssignedTasks } = useContext(taskContext)
  const survey = new Model(surveyJson)

  survey.focusFirstQuestionAutomatic = false
  survey.showTitle = false

  const saveResults = useCallback(
    (sender) => {
      const results = sender.data
      serverAPI
        .post('/tasks/completed/new', {
          assigned_task_id: id,
          response_json_data: results,
          copy_of_survey_json: surveyJson,
        })
        .then((response) => {
          if (response && response.data.success) {
            console.log('Completed task data added to the db!')
          }
        })
        .catch((err) => {
          console.log('Error!')
        })

      serverAPI
        .post(`tasks/completed/update?assigned_task_id=${id}`)
        .then((response) => {
          if (response && response.data.success) {
            // window.location.reload();
            serverAPI
              .get(`/tasks/assigned?client_uuid=${uuid}`)
              .then((response) => {
                if (response.data.success) {
                  setAssignedTasks(response.data.assignedTasks)
                  setCompletedTasks(response.data.completedTasks)
                }
              })
              .catch((err) => {
                console.log(err)
              })
          }
        })
        .catch((err) => {
          console.log('Error!')
        })
    },
    [id, setAssignedTasks, setCompletedTasks, surveyJson, uuid]
  )

  survey.onComplete.add(saveResults)

  return (
    <div className="mx-10 mb-5" id={id}>
      <Card>
        <div className="flex items-center justify-start">
          <Incomplete className="h-6 mr-3 sm:h-9" alt="Complete Icon" />
          <span className="my-0 text-lg font-medium text-gray-900">
            {surveyJson.title}
          </span>
        </div>
        <Survey model={survey} />
      </Card>
    </div>
  )
}
