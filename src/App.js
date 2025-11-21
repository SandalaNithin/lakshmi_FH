import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/About";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import BookingCalendar from "./components/BookingCalendar";
import PopupForm from "./components/PopupForm";
import { AnimatePresence } from "framer-motion";




function AnimatedApp() {
  const location = useLocation();

  return (
    <>
      <Header />

      {/* 🔥 Popup must be inside AnimatePresence to render properly */}
      <PopupForm />
         
      <AnimatePresence mode="wait">
        <main className="flex-grow" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingCalendar />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedApp />
    </Router>
  );
}
