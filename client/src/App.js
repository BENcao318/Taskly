import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ClientPage } from './pages/ClientPage'
import { TaskPage } from './pages/TaskPage'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/main" />}></Route> */}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/client" element={<ClientPage />}></Route>
        <Route path="/task" element={<TaskPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
