import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { MainPage } from './pages/MainPage'
import serverAPI from './hooks/useAxios'

export const UserContext = React.createContext()

const App = () => {
  const [authed, setAuthed] = useState(false)
  const [user, setUser] = useState()

  useEffect(() => {
    serverAPI.get('/me').then((response) => {
      if (response.data.success) {
        setAuthed(true)
        setUser(response.data.user)
      }
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          {authed ? (
            <Route path="/" element={<Navigate to="/main" />}></Route>
          ) : (
            <Route path="/" element={<LandingPage />}></Route>
          )}

          <Route path="/main" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default App
