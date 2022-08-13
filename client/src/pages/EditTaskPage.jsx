import React from "react";
import { NavBar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { EditTask } from "../sections/EditTask";

export const EditTaskPage = () => {
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex ">
          <Sidebar />
          <EditTask />
        </div>
      </div>
    </div>
  );
};
