import React from 'react'

export const AssignedTaskTags = ({ assignedTasks, setAssignedTasks }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {assignedTasks.map((task, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center gap-2 px-2 rounded-lg ring-2 ring-blue-600"
          >
            {task}
            <div
              className="text-xl font-semibold cursor-pointer"
              onClick={() =>
                setAssignedTasks((prev) => prev.filter((item) => item !== task))
              }
            >
              x
            </div>
          </div>
        )
      })}
    </div>
  )
}
