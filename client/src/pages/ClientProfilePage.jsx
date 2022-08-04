import React from "react";
import { NavBar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { ClientDetail } from "../sections/ClientDetail";

export const ClientProfilePage = () => {
  //todo
  // Add the user info into localstoreage
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex ">
          <Sidebar />
          <ClientDetail />
        </div>
      </div>
    </div>
  );
};
