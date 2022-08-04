import React from "react";

export function ClientInfo(props) {
  const { summary, phoneNumber, email } = props;

  return (
    <div className="w-1/4 h-full bg-gray-50 border-r border-neutral-200 p-4">
      <p className="my-2 text-base font-bold text-gray-900">Summary of Needs</p>
      <p className="text-base font-normal text-gray-500 text">{summary}</p>
      <p className="my-2 text-base font-bold text-gray-900">Email Address</p>
      <p className="text-base font-normal text-gray-500 text">{email}</p>
      <p className="my-2 text-base font-bold text-gray-900">Phone Number</p>
      <p className="text-base font-normal text-gray-500 text">{phoneNumber}</p>
    </div>
  );
}
