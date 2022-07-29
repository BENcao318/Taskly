import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
// import { SigninPage } from './pages/SigninModal'
// import { SignupPage } from './pages/SignupModal'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {/* <Route path="/signin" element={<SigninPage />}></Route> */}
        {/* <Route path="/signup" element={<SignupPage />}></Route> */}
      </Routes>
    </Router>
  )
}

export default App
