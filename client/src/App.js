import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { MainPage } from './pages/MainPage'
import { UserProvider } from './hooks/UserContext'

export const UserContext = React.createContext()

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/main" />}></Route> */}
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
