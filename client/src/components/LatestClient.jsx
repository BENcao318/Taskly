import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as DownChevron } from "../assets/downChevron.svg";
import { ReactComponent as TaskLogo } from "../assets/taskLogo.svg";
import { ReactComponent as PenLogo } from "../assets/penLogo.svg";
import { ReactComponent as TrashCanLogo } from "../assets/trashcanLogo.svg";
import { Transition } from "@headlessui/react";

export const LatestClient = () => {
  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
          Latest Clients
        </caption>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th
              scope="row"
              class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap"
            >
              <img
                class="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="profile image"
              />
              <div class="pl-3">
                <div class="text-base font-semibold">Neil Sims</div>
                <div class="font-normal text-gray-500">
                  neil.sims@flowbite.com
                </div>
              </div>
            </th>
            <td class="py-4 px-56"></td>

            <td class="py-4 px-6">
              <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                All Tasks Completed
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th
              scope="row"
              class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              <img
                class="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="profile image"
              />
              <div class="pl-3">
                <div class="text-base font-semibold">Bonnie Green</div>
                <div class="font-normal text-gray-500">bonnie@flowbite.com</div>
              </div>
            </th>
            <td class="py-4 px-56"></td>

            <td class="py-4 px-6">
              <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                No Task Assigned
              </span>
            </td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th
              scope="row"
              class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              <img
                class="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="profile image"
              />
              <div class="pl-3">
                <div class="text-base font-semibold">Jese Leos</div>
                <div class="font-normal text-gray-500">jese@flowbite.com</div>
              </div>
            </th>
            <td class="py-4 px-56"></td>
            <td class="py-4 px-6">
              <span class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                Tasks In Progress
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
