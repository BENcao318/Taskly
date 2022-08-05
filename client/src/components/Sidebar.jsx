import React, { useState } from "react";
import { ReactComponent as HomeLogo } from "../assets/homeLogo.svg";
import { ReactComponent as ClientLogo } from "../assets/clientLogo.svg";
import { ReactComponent as TaskLogo } from "../assets/taskLogo.svg";
import { ReactComponent as HelpLogo } from "../assets/helpLogo.svg";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
 
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <button
         className="md:hidden items-center cursor-pointer fixed left-32 top-3.5 z-50" 
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <svg
          aria-hidden="true"
          className=" w-6 h-6 mr-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <aside
        className={`translate-x-0 w-64 h-screen border-r ease-in-out duration-300 ${
          showSidebar ? "" : "hidden md:block"
        }`}
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <HomeLogo />
                <span className="ml-3">Home</span>
              </div>
            </li>

            <li>
              <div
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => navigate("/client")}
              >
                <ClientLogo />
                <span className="flex-1 ml-3 whitespace-nowrap">Clients</span>
              </div>
            </li>
            <li>
              <div
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => navigate("/task")}
              >
                <TaskLogo />
                <span className="flex-1 ml-3 whitespace-nowrap">Tasks </span>
              </div>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <div
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white group"
              >
                <HelpLogo />
                <span className="ml-3">Help</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
