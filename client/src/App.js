import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ClientPage } from './pages/ClientPage'
import { TaskPage } from './pages/TaskPage'
import { ClientProfilePage } from './pages/ClientProfilePage'
import { NewTaskPage } from './pages/NewTaskPage'
import { PrivateRoute } from './components/PrivateRoute'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/client"
          element={
            <PrivateRoute>
              <ClientPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/task"
          element={
            <PrivateRoute>
              <TaskPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/client/xyz" element={<ClientProfilePage />} />
        <Route path="/task/new" element={<NewTaskPage />} />
      </Routes>
    </Router>
  )
}

export default App
