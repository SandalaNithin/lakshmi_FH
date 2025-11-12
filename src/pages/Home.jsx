import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Hall from "../assets/Hall.jpg";
import Wedinghall from "../assets/Wedinghall.jpg";
import Birthday from "../assets/Birthday.jpg";
import Events from "../assets/Events.jpg";
import { Sparkles, UtensilsCrossed, Camera, Music } from "lucide-react";
import { useNavigate } from 'react-router-dom';



export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [successPopup, setSuccessPopup] = useState(false);


  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("popupShown"); // change to localStorage if you want permanent
    if (!alreadyShown) {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true");
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



     //if valid form
     setError("");
      setSuccessMessage("Thank you for submitting the form! We’ll contact you soon.");

    setSuccessPopup(true);
    

     setTimeout(() => {
      setSuccessPopup(false);
      setSuccessMessage("");
      setShowPopup(false);
      setName("");
      setPhone("");
     }, 1000);
  };




  // All background images
  const heroImages = [Hall, Wedinghall, Birthday, Events];
  

  // Go to next image
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };


  // ---------- SERVICES & EVENTS ---------
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
  const navigate=useNavigate();
  const handleBookNow=()=>{
    navigate('/contact');
  }

  // Go to previous image
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  

     return (
    <div className="relative">
      {/* ---------- SUCCESS MESSAGE ---------- */}
      {/* {SuccessPopup && (
        <div className="fixed top-5 left-1/3 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-[60] text-center animate-bounce">
          {successMessage}
        </div>
      )} */}

      {/* ---------- POPUP FORM ---------- */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white p-5 rounded-2xl shadow-5xl w-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-1 right-5 text-gray-500 hover:text-gray-700"
            >
              <X size={14} />
            </button>
            <h2 className="text-3xl font-bold mb-4 text-center text-fuchsia-700">
              Welcome to Lakshmi Function Hall!
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-3 focus:ring-blue-400"
              />
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setPhone(value);
                }}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {error && (
                <div className="text-red-600 text-sm text-center bg-red-100 p-2 rounded-md animate-bounce">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}






      {/* Hero Section */}
<section className="relative h-[300px] md:h-[200px] lg:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImages[currentSlide]}
          alt="Slide"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Show Text ONLY on First Image */}
        {currentSlide === 0 && (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="font-viewport text-5xl font-bold mb-4">Lakshmi Function Hall</h1>
            <p className="text-2xl mb-4">Bring the Vibe, We'll Bring the Magic</p>
            <button 
              onClick={handleBookNow}
              className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all">
              Book Your Event Now
            </button>
          </div>
        )}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
        >
          <ChevronRight size={28} />
        </button>
  </section>

       {/* ---------- ABOUT SECTION ---------- */}
      <section className="py-16 bg-white-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animation-fadeIn">
              Welcome to Lakshmi Function Hall
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={Hall}
                alt="Function Hall"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Lakshmi Function Hall, we believe every celebration deserves a perfect venue. Whether it's a grand wedding, a joyful birthday party, or a professional corporate event, we provide exceptional spaces that bring your vision to life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our state-of-the-art facilities can accommodate multiple events simultaneously, ensuring each celebration receives dedicated attention and space. With elegant interiors, modern amenities, and a team committed to excellence, we transform ordinary gatherings into extraordinary memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- EVENTS SECTION ---------- */}
      <section className="py-20 bg-stone-200 text-center px-6">
        <h2 className="font-Rubik text-3xl mb-6 ">Celebrate Your Most Cherished Moments in Life at Lakshmi Function Halls – and All Special Occasions Hall in Buchireddypalem,Nellore.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Celebrate your {event.title.toLowerCase()} with us — elegant spaces and
                  great service.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    
      
      {/* ---------- SERVICES SECTION ---------- */}
      <section className="py-16 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={60} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      

      {/* ---------- CTA SECTION ---------- */}
      <section className="py-16 bg-gradient-to-r from-zinc-200 to-zinc-200 text-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Ready to Plan Your Event?</h2>
        <p className="text-lg mb-6 text-slate-500">
          Contact us and let’s make your celebration unforgettable!
        </p>
        <button
        onClick={handleBookNow}
        className="bg-violet-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}





