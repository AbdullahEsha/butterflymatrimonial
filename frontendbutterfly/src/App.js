import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './asset/css/app.css'
import Home from './components/Home'
import SpecialPairing from './components/SpecialPairing'
import About from './components/About'
import Venus from './components/Venus'
import Contact from './components/Contact'
import CVBank from './components/CVBank'
import { Notfound } from './components/NotFound'
import AcceptableUsePolicy from './components/FooterComponent/AcceptableUsePolicy'
import Blog from './components/FooterComponent/Blog'
import Career from './components/FooterComponent/Career'
import CookiePolicy from './components/FooterComponent/CookiePolicy'
import Guide from './components/FooterComponent/Guide'
import Pricing from './components/FooterComponent/Pricing'
import PrivacyPolicy from './components/FooterComponent/PrivacyPolicy'
import Terms from './components/FooterComponent/Terms'
import Success from './components/Success'
import Cancel from './components/Cancel'
import Failed from './components/Failed'
import { Provider } from 'react-redux'
import store from './store'
import ButterflyCvBank from './components/ButterflyCvBank'
import ButterflyGallery from './components/ButterflyGallery'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="special-pairing" element={<SpecialPairing />} />
          <Route path="about" element={<About />} />
          <Route path="venus" element={<Venus />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cv-bank" element={<CVBank />} />
          <Route path="butterfly-cv-bank/:id" element={<ButterflyCvBank />} />
          <Route path="butterfly-gallery/:id" element={<ButterflyGallery />} />
          <Route
            path="acceptable-use-policy"
            element={<AcceptableUsePolicy />}
          />
          <Route path="blog" element={<Blog />} />
          <Route path="career" element={<Career />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="guide" element={<Guide />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="failed" element={<Failed />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
