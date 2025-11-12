import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Check } from "lucide-react";
import Hall from "../assets/Hall.jpg";
import Wedinghall from "../assets/Wedinghall.jpg";
import Birthday from "../assets/Birthday.jpg";
import Events from "../assets/Events.jpg";
import { Sparkles, UtensilsCrossed, Camera, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

useEffect(() => {
  const alreadyShown = sessionStorage.getItem("popupShown");
  if (!alreadyShown) {
    const timer = setTimeout(() => {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }, 800); // Delay popup by 0.8s for smoother UX

    return () => clearTimeout(timer);
  }
}, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("⚠️ Please enter your name");
      return;
    }
    if (!phone || phone.length !== 10) {
      setError("⚠️ Please enter a valid 10-digit phone number");
      return;
    }

    setError("");
    setSuccessMessage("✅ Thank you! We’ll contact you soon.");
    setSuccessPopup(true);

    // Reset popup after short delay
    setTimeout(() => {
      setSuccessPopup(false);
      setSuccessMessage("");
      setShowPopup(false);
      setName("");
      setPhone("");
    }, 2000);
  };

  const heroImages = [Hall, Wedinghall, Birthday, Events];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const services = [
    { icon: Sparkles, name: "Decoration", desc: "Beautiful decor for your special day" },
    { icon: UtensilsCrossed, name: "Catering", desc: "Delicious food services" },
    { icon: Camera, name: "Photography", desc: "Professional photo and video" },
    { icon: Music, name: "Entertainment", desc: "Music and DJ arrangements" },
  ];

  const events = [
    { title: "Wedding", image: Wedinghall },
    { title: "Birthday", image: Birthday },
    { title: "Events", image: Events },
  ];

  const handleBookNow = () => navigate("/booking");

  return (
    <div className="relative">
  {/* ✅ Success Popup */}
  {successPopup && (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] animate-fadeIn">
      <div className="bg-white p-6 rounded-xl shadow-2xl text-center">
        <Check size={40} className="text-green-600 mx-auto mb-3" />
        <h2 className="text-xl font-semibold text-green-700">{successMessage}</h2>
      </div>
    </div>
  )}

  {/* ✅ Initial Form Popup */}
  {showPopup && (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9998] animate-fadeIn"
      onClick={() => setShowPopup(false)}
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-2xl w-80 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={18} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">
          Welcome to Lakshmi Function Hall!
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 10);
              setPhone(value);
            }}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {error && (
            <p className="text-red-600 text-sm bg-red-100 p-2 rounded-md text-center">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )}


      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[200px] lg:h-[500px] overflow-hidden">
        <img
          src={heroImages[currentSlide]}
          alt="Slide"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {currentSlide === 0 && (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lakshmi Function Hall</h1>
            <p className="text-lg md:text-2xl mb-6">Bring the Vibe, We'll Bring the Magic</p>
            <button
              onClick={handleBookNow}
              className="bg-white text-indigo-900 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-all"
            >
              Book Your Event Now
            </button>
          </div>
        )}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
        >
          <ChevronRight size={28} />
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to Lakshmi Function Hall
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src={Hall}
              alt="Function Hall"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                At Lakshmi Function Hall, we believe every celebration deserves a perfect venue —
                whether it's a wedding, birthday, or corporate event.
              </p>
              <p>
                Our facilities are elegant, modern, and designed to make your moments unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-stone-200 text-center px-6">
        <h2 className="text-3xl mb-6 font-semibold">
          Celebrate Your Most Cherished Moments at Lakshmi Function Hall
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{event.title}</h3>
                <p className="text-gray-600 text-sm">
                  Celebrate your {event.title.toLowerCase()} with elegance and joy.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-100 to-blue-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Plan Your Event?</h2>
        <p className="text-lg mb-6 text-gray-700">
          Contact us and let’s make your celebration unforgettable!
        </p>
        <button
          onClick={handleBookNow}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

