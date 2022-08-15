import React, { useContext, useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Button, Progress, Accordion } from "flowbite-react";
import { ReactComponent as DownChevron } from "../assets/downChevron.svg";
import { ReactComponent as PaperAirplane } from "../assets/PaperAirplane.svg";
import { ReactComponent as PenLogo } from "../assets/penLogo.svg";
import { ReactComponent as TrashCanLogo } from "../assets/trashcanLogo.svg";
import { TaskList } from "../components/TaskList";
import serverAPI from "../hooks/useAxios";
import { toast } from "react-toastify";
import { clientContext } from "../context/ClientContext";
import { taskContext } from "../context/TaskContext";

export function TaskOverviewClientVarient(props) {
  const { assignedTasks, client, uuid } = props;
  const buttonRef = useRef(null);
  const [toggleActionMenu, setToggleActionMenu] = useState(false);
  const { setEditClientInfo, setClientUUID } = useContext(clientContext);
  const [openEditClientModal, setOpenEditClientModal] = useState();
  const [openDeleteClientModal, setOpenDeleteClientModal] = useState({
    isOpen: false,
    uuid: "",
  });
  const { setEditAssignedTasks } = useContext(taskContext);

  let doneTasks = 0;
  let notDoneTasks = 0;

  assignedTasks.forEach((element) => {
    if (element.completed) {
      doneTasks += 1;
    } else {
      notDoneTasks += 1;
    }
  });

  const handleClickEditClientButton = () => {
    serverAPI
      .get(`/users/client-info?client_uuid=${uuid}`)
      .then((response) => {
        if (response.data.success) {
          setEditClientInfo((prev) => ({
            ...prev,
            ...response.data.clientInfo,
            uuid: uuid,
          }));
          setEditAssignedTasks((prev) => [...response.data.assignedTasks]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setOpenEditClientModal(true);
  };

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
    <div className="w-1/4 fixed bottom-0 left-0 bg-white">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>
            Task List
            <div className="text-base text-xs text-green-700 mt-2">
              {doneTasks}/{doneTasks + notDoneTasks} Complete
            </div>
            <Progress
              progress={(doneTasks / (doneTasks + notDoneTasks)) * 100}
              color="green"
              size="sm"
            />
            <p className="text-base text-xs text-gray-500 text mt-2">
              Est. time to complete: {notDoneTasks * 5} minutes
            </p>
          </Accordion.Title>
          <Accordion.Content>
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
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
