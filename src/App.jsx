import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RostersPage from './pages/RostersPage'
import TournamentsPage from './pages/TournamentsPage'
import JoinPage from './pages/JoinPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rosters" element={<RostersPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
