import React from "react";

export function ClientInfo(props) {
  const { summary, phoneNumber, email } = props;

  return (
    <div className="flex flex-row w-full h-fit border-b border-neutral-200 p-4">
      <div className="w-1/4 h-full">
        <p className="my-2 text-base font-bold text-gray-900">Email Address</p>
        <p className="text-base font-normal text-gray-500 text">{email}</p>
      </div>
      <div className="w-1/4 h-full">
        <p className="my-2 text-base font-bold text-gray-900">Phone Number</p>
        <p className="text-base font-normal text-gray-500 text">
          {phoneNumber}
        </p>
      </div>
      <div className="w-2/4 h-full">
        <p className="my-2 text-base font-bold text-gray-900">
          Summary of Needs
        </p>
        <p className="text-base font-normal text-gray-500 text">{summary}</p>
      </div>
    </div>
  );
}
