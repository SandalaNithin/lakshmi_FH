import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/About';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import PrivacyPolicy from './pages/Privacy';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
           <Route path="/Privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;