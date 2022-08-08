import React from 'react'
import { useContext } from 'react'
import { ReactComponent as CloseLogo } from '../assets/closeLogo.svg'
import { taskContext } from '../context/TaskContext'

export const EditAssignedTaskTags = () => {
  const { editAssignedTasks, setEditAssignedTasks } = useContext(taskContext)

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {editAssignedTasks.map((task) => {
        return (
          <div
            key={task.uuid}
            className="flex items-center justify-center gap-2 px-2 py-2 rounded-lg ring-2 ring-blue-600 hover:bg-slate-200 hover:ring-blue-400"
          >
            <div className="font-semibold text-md">
              {task.form_json_data.title}
            </div>
            <div
              className="flex items-center justify-center w-6 h-6 text-blue-600 cursor-pointer hover:text-blue-200"
              onClick={() =>
                setEditAssignedTasks((prev) =>
                  prev.filter((item) => item !== task)
                )
              }
            >
              <CloseLogo />
            </div>
          </div>
        )
      })}
    </div>
  )
}
