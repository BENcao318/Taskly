import React, { useEffect, useRef, useState } from "react";

export const UncompletedTask = () => {
  return (
    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
          Uncompleted Tasks
          <p class="mt-1 text-sm font-normal text-gray-500">
            This is a list of uncompleted tasks in last 7 days
          </p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="py-3 px-6">
              TASK
            </th>
            <th scope="col" class="py-3 px-6">
              ASSIGNED DATE
            </th>
            <th scope="col" class="py-3 px-6">
              CLIENT
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b font-medium text-gray-900 whitespace-nowrap hover:bg-gray-50">
            <th scope="row" class="py-4 px-6 font-medium">
              Create Profile
            </th>
            <td class="py-4 px-6">Apr 23, 2022</td>
            <td class="py-4 px-6">Bonnie Green</td>
          </tr>
          <tr class="bg-white border-b font-medium text-gray-900 whitespace-nowrap hover:bg-gray-50">
            <th scope="row" class="py-4 px-6 font-medium">
              Task 2
            </th>
            <td class="py-4 px-6">Apr 23, 2022</td>
            <td class="py-4 px-6">Bonnie Green</td>
          </tr>
          <tr class="bg-white border-b font-medium text-gray-900 whitespace-nowrap hover:bg-gray-50">
            <th scope="row" class="py-4 px-6 font-medium">
              Task 3
            </th>
            <td class="py-4 px-6">Apr 23, 2022</td>
            <td class="py-4 px-6">Bonnie Green</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
