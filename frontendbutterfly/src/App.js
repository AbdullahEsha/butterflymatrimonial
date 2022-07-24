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
import DisplayContact from './components/AdminComponent/DisplayContact'
import { Notfound } from './components/NotFound'
import AcceptableUsePolicy from './components/FooterComponent/AcceptableUsePolicy'
import Blog from './components/FooterComponent/Blog'
import Career from './components/FooterComponent/Career'
import CookiePolicy from './components/FooterComponent/CookiePolicy'
import Guide from './components/FooterComponent/Guide'
import Pricing from './components/FooterComponent/Pricing'
import PrivacyPolicy from './components/FooterComponent/PrivacyPolicy'
import Terms from './components/FooterComponent/Terms'

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
        <Route
          path="/acceptable-use-policy"
          element={<AcceptableUsePolicy />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/admin" element={<AuthProvider />}>
          <Route path="" element={<Dashboard />} />
          <Route path="display-cv" element={<DisplayAllCV />} />
          <Route path="display-cv/:id" element={<DisplayCV />} />
          <Route path="contact" element={<DisplayContact />} />
          <Route path="venus" element={<AdminVenus />} />
          <Route path="special-pairing" element={<AdminSpecialPairing />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
