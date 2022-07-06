import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './asset/css/app.css'
import { AuthProvider } from './components/AdminComponent/auth'
import Home from './components/Home'
import SpecialPairing from './components/SpecialPairing'
import About from './components/About'
import Venus from './components/Venus'
import Contact from './components/Contact'
import CVBank from './components/CVBank'
import Dashboard from './components/AdminComponent/Dashboard'
import DisplayAllCV from './components/AdminComponent/DisplayAllCV'
import DisplayCV from './components/AdminComponent/DisplayCV'
import Login from './components/AdminComponent/Login'
import AdminSpecialPairing from './components/AdminComponent/AdminSpecialPairing'
import AdminVenus from './components/AdminComponent/AdminVenus'
import { Notfound } from './components/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/special-pairing" element={<SpecialPairing />} />
        <Route path="/about" element={<About />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv-bank" element={<CVBank />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/admin" element={<AuthProvider />}>
          <Route path="" element={<Dashboard />} />
          <Route path="display-cv" element={<DisplayAllCV />} />
          <Route path="venus" element={<AdminVenus />} />
          <Route path="special-pairing" element={<AdminSpecialPairing />} />
          <Route path="display-cv/:id" element={<DisplayCV />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
