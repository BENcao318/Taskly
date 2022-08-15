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

export function TaskOverview(props) {
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
            Jump to a Task
            <div className="text-base text-xs text-green-700">
              {doneTasks}/{doneTasks + notDoneTasks} Complete
            </div>
            <Progress
              progress={(doneTasks / (doneTasks + notDoneTasks)) * 100}
              color="green"
              size="sm"
            />
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
            <hr className="my-2" />
            <div className="flex flex-col items-center">
              <Button onClick={sendTasksToClient}>
                <PaperAirplane className="w-5 h-5 mr-2" />
                Send Tasks to Client
              </Button>
              <hr className="my-1 border-none" />
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-white-700 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ring-2 ring-slate-300"
                ref={buttonRef}
              >
                Actions
                <DownChevron />
              </button>
              <div
                className={`${
                  toggleActionMenu ? "" : "hidden"
                } z-40 min-w-62 bg-white rounded-lg divide-y divide-gray-100 shadow-lg shadow-neutral-400 dark:bg-gray-700 fixed mt-2 right-24`}
              >
                <Transition
                  as="div"
                  show={toggleActionMenu}
                  enter="transform transition duration-[300ms]"
                  enterFrom="opacity-0 scale-50 -translate-y-1/2"
                  enterTo="opacity-100 scale-100 translate-y-0"
                  leave="transform duration-200 transition ease-in-out"
                  leaveFrom="opacity-100 scale-100 translate-x-0"
                  leaveTo="opacity-0 scale-95 -translate-x-full"
                >
                  <ul
                    className="py-1 font-semibold text-gray-700 text-md dark:text-gray-200"
                    aria-labelledby="dropdownDefault"
                  >
                    <li>
                      <div
                        className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleClickEditClientButton}
                      >
                        <PenLogo className="w-5 fill-slate-600" />
                        Edit Client
                      </div>
                    </li>
                    <li>
                      <div
                        className="flex items-center gap-2 px-4 py-2 text-red-600 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => {
                          setOpenDeleteClientModal((prev) => ({
                            ...prev,
                            isOpen: true,
                            uuid: uuid,
                          }));
                        }}
                      >
                        <TrashCanLogo className="w-5 " />
                        Delete Client
                      </div>
                    </li>
                  </ul>
                </Transition>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
