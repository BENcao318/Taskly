import React from "react";
import { NavBar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { SurveyCreatorWidget } from "../sections/SurveyCreatorWidget";

export const NewTaskPage = () => {
  //todo
  // Add the user info into localstoreage
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex ">
          <Sidebar />
          <SurveyCreatorWidget />
        </div>
      </div>
    </div>
  );
};
