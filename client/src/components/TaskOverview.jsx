import React from "react";
import { Button, Dropdown } from "flowbite-react";
import { ReactComponent as PaperAirplane } from "../assets/PaperAirplane.svg";
import { TaskList } from "../components/TaskList";
import serverAPI from "../hooks/useAxios";
import { toast } from "react-toastify";

export function TaskOverview(props) {
  const { assignedTasks, completedTasks, client } = props;
  const sendTasksToClient = () => {
    serverAPI
      .post("/users/client/send-tasks", { client_email: client.email })
      .then((response) => {
        if (response.data.success) {
          toast.success(`Successfully sent the tasks to the client 😊`, {
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error(
            `Error sending the tasks to the client, please try again 🙌`,
            {
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
        }
      })
      .catch((err) => {
        toast.error(
          `Error sending the tasks to the client, please try again 🙌`,
          {
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        console.log(err);
      });
  };

  return (
    <div className="w-1/4 h-full p-4 border-l border-neutral-200">
      <p className="my-2 text-xl font-bold text-gray-900">Jump to a Task</p>
      {assignedTasks.map((task) => {
        if (!task.completed) {
          return (
            <TaskList
              key={task.task_id}
              complete={task.completed}
              taskTitle={task["task.form_json_data"]["title"]}
              id={task.id}
            />
          );
        }
      })}
      {assignedTasks.map((task) => {
        if (task.completed) {
          return (
            <TaskList
              key={task.task_id}
              complete={task.completed}
              taskTitle={task["task.form_json_data"]["title"]}
              id={task.id}
            />
          );
        }
      })}
      <hr className="my-2" />
      <div className="flex flex-col items-center">
        <Button onClick={sendTasksToClient}>
          <PaperAirplane className="w-5 h-5 mr-2" />
          Send Tasks to Client
        </Button>
        <hr className="my-1 border-none" />
        <Dropdown label="Actions" color="light" size="md"></Dropdown>
      </div>
    </div>
  );
}
