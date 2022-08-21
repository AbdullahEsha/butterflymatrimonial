import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './asset/css/app.css'
import { AuthProvider } from './components/AdminComponent/auth'
import Dashboard from './components/AdminComponent/Dashboard'
import DisplayAllCV from './components/AdminComponent/DisplayAllCV'
import DisplayCV from './components/AdminComponent/DisplayCV'
import Login from './components/AdminComponent/Login'
import AdminSpecialPairing from './components/AdminComponent/AdminSpecialPairing'
import AdminVenus from './components/AdminComponent/AdminVenus'
import DisplayContact from './components/AdminComponent/DisplayContact'
import { Notfound } from './components/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthProvider />}>
          <Route path="" element={<Dashboard />} />
          <Route path="display-cv" element={<DisplayAllCV />} />
          <Route path="display-cv/:id" element={<DisplayCV />} />
          <Route path="contact" element={<DisplayContact />} />
          <Route path="venus" element={<AdminVenus />} />
          <Route path="special-pairing" element={<AdminSpecialPairing />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
