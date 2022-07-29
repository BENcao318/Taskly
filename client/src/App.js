import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { AdminPage } from './pages/AdminPage'
import serverAPI from './hooks/useAxios'

const App = () => {
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    serverAPI.get('/me').then((response) => {
      if (response.data.success) {
        console.log('test')
        setAuthed(true)
      }
    })
  }, [])

  return (
    <Router>
      <Routes>
        {authed ? (
          <Route path="/" element={<Navigate to="/main" />}>
            {' '}
          </Route>
        ) : (
          <Route path="/" element={<LandingPage />}>
            {' '}
          </Route>
        )}

        <Route path="/main" element={<AdminPage />}>
          {' '}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
