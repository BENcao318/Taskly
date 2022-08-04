import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ClientPage } from "./pages/ClientPage";
import { TaskPage } from "./pages/TaskPage";
import { ClientProfilePage } from "./pages/ClientProfilePage";
import { NewTaskPage } from "./pages/NewTaskPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/main" />}></Route> */}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/client" element={<ClientPage />}></Route>
        <Route path="/task" element={<TaskPage />}></Route>
        <Route path="/client/xyz" element={<ClientProfilePage />}></Route>
        <Route path="/task/new" element={<NewTaskPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
