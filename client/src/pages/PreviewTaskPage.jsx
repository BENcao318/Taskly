import React from "react";
import { NavBar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { PreviewTask } from "../sections/PreviewTask";

export const PreviewTaskPage = () => {
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex ">
          <Sidebar />
          <PreviewTask />
        </div>
      </div>
    </div>
  );
};
