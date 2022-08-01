import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { MainPage } from './pages/MainPage'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/main" />}></Route> */}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
