import React from 'react'
import { TaskResponse } from '../components/TaskResponse'
import { LoadSurvey } from './LoadSurvey'

export function AssignedTasks(props) {
  const { assignedTasks, client, completedTasks, uuid, setCompletedTasks } =
    props

  return (
    <div className="w-full h-full px-20 pt-10">
      {assignedTasks.map((task) => {
        if (!task.completed) {
          return (
            <LoadSurvey
              surveyJson={task['task.form_json_data']}
              task_id={task.task_id}
              key={task.task_id}
              client={client}
              uuid={uuid}
              setCompletedTasks={setCompletedTasks}
              id={task.id}
            />
          )
        }
        return null
      })}
      {completedTasks.map((task) => {
        return (
          <TaskResponse
            copy_of_survey_json={task['copy_of_survey_json']}
            responseData={task['response_json_data']}
            key={task['assigned_task_id']}
            id={task['assigned_task_id']}
          />
        )
      })}
    </div>
  )
}
