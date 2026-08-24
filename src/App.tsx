import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AiSolutions } from './pages/AiSolutions'
import { MobileApps } from './pages/MobileApps'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-solutions" element={<AiSolutions />} />
        <Route path="/mobile-apps" element={<MobileApps />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
