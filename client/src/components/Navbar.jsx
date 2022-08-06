import React, { useContext } from "react";
import { ReactComponent as PencilLogo } from "../assets/pencil.svg";
import { Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import serverAPI from "../hooks/useAxios";
import { authContext } from "../context/AuthContext";

export const NavBar = () => {
  const { setAuth } = useContext(authContext);
  const navigate = useNavigate();

  const signOut = () => {
    serverAPI.get("/users/signout").then((response) => {
      if (response.data.success) {
        // localStorage.removeItem('tasklyUser')
        setAuth(null);
        // console.log('signout')
        navigate("/");
      }
    });
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center ml-2">
          
          <a href="http://localhost:3000" className="flex items-center">
            <PencilLogo />
            <span className="self-center px-2 text-xl font-semibold whitespace-nowrap dark:text-white">
              Taskly
            </span>
          </a>
        </div>
        <div className="flex items-center mr-2">
          <svg
            aria-hidden="true"
            className="w-6 h-6 mr-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <svg
            aria-hidden="true"
            className="w-6 h-6 mr-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>

          <Popover className="relative">
            <Popover.Button
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="user"
              />
            </Popover.Button>

            <Popover.Panel className="absolute z-10">
              <button
                className="w-24 px-4 py-2 mt-2 font-medium -translate-x-12 rounded-lg bg-sky-200 hover:bg-sky-600 hover:text-white"
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </button>
            </Popover.Panel>
          </Popover>
        </div>
      </div>
    </nav>
  );
};
