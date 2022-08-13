import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ClientPage } from "./pages/ClientPage";
import { ClientProfilePage } from "./pages/ClientProfilePage";
import { PreviewTaskPage } from "./pages/PreviewTaskPage";
import { EditTaskPage } from "./pages/EditTaskPage";
import { TaskPage } from "./pages/TaskPage";
import { PrivateRoute } from "./components/PrivateRoute";
import { TaskSection } from "./sections/TaskSection";
import { SurveyCreatorWidget } from "./sections/SurveyCreatorWidget";
import { ClientSection } from "./sections/ClientSection";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage redirectPath={window.location.href} />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/client" element={<ClientPage />}>
            <Route path="" element={<ClientSection />} />
          </Route>
          <Route path="client/:uuid" element={<ClientProfilePage />} />
          <Route
            path="/task/preview/:task_id"
            element={<PreviewTaskPage />}
          ></Route>
          <Route path="/task/edit/:task_id" element={<EditTaskPage />}></Route>
          <Route path="/task" element={<TaskPage />}>
            <Route path="" element={<TaskSection />} />
            <Route path="new" element={<SurveyCreatorWidget />} />
          </Route>
        </Route>

        {/* <Route path="/client/xyz" element={<ClientProfilePage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
