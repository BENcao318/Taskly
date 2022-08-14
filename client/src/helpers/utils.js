export const taskProgressTag = (numOfCompletedTasks, numOfOutstandingTasks) => {
  if (numOfCompletedTasks === 0 && numOfOutstandingTasks === 0) {
    return (
      <span className="px-3 py-3 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded-lg">
        No Task Assigned
      </span>
    )
  } else if (numOfOutstandingTasks !== 0) {
    return (
      <span className="px-3 py-3 mr-2 text-sm font-medium text-purple-800 bg-purple-200 rounded-lg ">
        Tasks In Progress
      </span>
    )
  } else if (numOfCompletedTasks !== 0 && numOfOutstandingTasks === 0) {
    return (
      <span className="px-3 py-3 mr-2 text-sm font-medium text-green-800 bg-green-200 rounded-lg">
        All Tasks Completed
      </span>
    )
  }
}
