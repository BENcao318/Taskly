import React, { useState } from "react";
import { ClientInfo } from "../components/ClientInfo";
import { AssignedTasks } from "../components/AssignedTasks";
import { TaskOverview } from "../components/TaskOverview";

export const ClientDetailPage = () => {
  return (
    <div className="w-full h-screen flex">
      <ClientInfo
        summary={"This is a test"}
        email={"yourname@example.com"}
        phoneNumber={"222-333-4444"}
      />
      <AssignedTasks />
      <TaskOverview />
    </div>
  );
};
