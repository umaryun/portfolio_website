import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage }    from './pages/HomePage'
import { WritingPage } from './pages/WritingPage'
import { AboutPage }   from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<HomePage />}    />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/about"   element={<AboutPage />}   />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
