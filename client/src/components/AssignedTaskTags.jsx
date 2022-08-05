import React from 'react'
import { ReactComponent as CloseLogo } from '../assets/closeLogo.svg'

export const AssignedTaskTags = ({ assignedTasks, setAssignedTasks }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {assignedTasks.map((task, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center gap-2 px-2 py-2 rounded-lg ring-2 ring-blue-600 hover:bg-slate-200 hover:ring-blue-400"
          >
            <div className="font-semibold text-md">{task}</div>
            <div
              className="flex items-center justify-center w-6 h-6 text-blue-600 cursor-pointer hover:text-blue-200"
              onClick={() =>
                setAssignedTasks((prev) => prev.filter((item) => item !== task))
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
