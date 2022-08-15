import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ClientPage } from './pages/ClientPage'
import { ClientProfilePage } from './pages/ClientProfilePage'
import { PreviewTaskPage } from './pages/PreviewTaskPage'
import { EditTaskPage } from './pages/EditTaskPage'
import { TaskPage } from './pages/TaskPage'
import { PrivateAdminRoute } from './components/PrivateAdminRoute'
import { TaskSection } from './sections/TaskSection'
import { SurveyCreatorWidget } from './sections/SurveyCreatorWidget'
import { ClientSection } from './sections/ClientSection'
import { PrivateClientRoute } from './components/PrivateClientRoute'
import { ClientAuthPage } from './pages/ClientAuthPage'
import { ClientViewPage } from './pages/ClientViewPage'
import { HomePage } from './pages/HomePage'
import { Dashboard } from './sections/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage redirectPath={window.location.href} />}
        />
        <Route element={<PrivateAdminRoute />}>
          <Route path="/home" element={<HomePage />}>
            <Route path="" element={<Dashboard />} />
          </Route>
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

        <Route path="/client/auth" element={<ClientAuthPage />} />
        <Route element={<PrivateClientRoute redirectPath="/client/auth" />}>
          <Route path="/client/view/:uuid" element={<ClientViewPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
