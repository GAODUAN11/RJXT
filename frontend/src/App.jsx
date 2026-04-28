import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CommunityPage from './pages/CommunityPage.jsx'
import PracticePage from './pages/PracticePage.jsx'
import TracksPage from './pages/TracksPage.jsx'
import FlowPage from './pages/FlowPage.jsx'
import StartPage from './pages/StartPage.jsx'
import CommunityDetailPage from './pages/CommunityDetailPage.jsx'
import PracticeDetailPage from './pages/PracticeDetailPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/community/:id" element={<CommunityDetailPage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/practice/:id" element={<PracticeDetailPage />} />
      <Route path="/tracks" element={<TracksPage />} />
      <Route path="/flow" element={<FlowPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}

export default App
