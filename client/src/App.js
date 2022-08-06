import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ClientPage } from './pages/ClientPage'
import { TaskPage } from './pages/TaskPage'
import { PrivateRoute } from './components/PrivateRoute'
import { TaskSection } from './sections/TaskSection'
import { SurveyCreatorWidget } from './sections/SurveyCreatorWidget'
import { ClientSection } from './sections/ClientSection'
import { ClientDetail } from './sections/ClientDetail'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/client" element={<ClientPage />}>
            <Route path="" element={<ClientSection />} />
            <Route path="xyz" element={<ClientDetail />} />
          </Route>
          <Route path="/task" element={<TaskPage />}>
            <Route path="" element={<TaskSection />} />
            <Route path="new" element={<SurveyCreatorWidget />} />
          </Route>
        </Route>

        {/* <Route path="/client/xyz" element={<ClientProfilePage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
