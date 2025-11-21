import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function PopupForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const location = useLocation(); // Detect page change

  useEffect(() => {
    const popupRegistered = sessionStorage.getItem("popupRegistered");

    // 👇 Show popup on EVERY page load or navigation until registered
    if (!popupRegistered) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      setShowPopup(false);
    }
  }, [location.pathname]); // Runs on reload + navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!phone || phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    sessionStorage.setItem("popupRegistered", "true"); // 🚀 stop popup forever

    setError("");
    setSuccessMessage("Thank you! We’ll contact you soon.");
    setSuccessPopup(true);

    setTimeout(() => {
      setSuccessPopup(false);
      setShowPopup(false);
      setName("");
      setPhone("");
    }, 2000);
  };

  return (
    <>
      {/* SUCCESS POPUP */}
      {successPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="bg-white p-6 rounded-xl shadow-xl text-center"
          >
            <Check size={40} className="text-green-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-green-700">
              {successMessage}
            </p>
          </motion.div>
        </div>
      )}

      {/* MAIN POPUP */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-blue/60 flex items-center justify-center z-[9998]"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold color-red text-center text-red-400 mb-5">
              Welcome to Lakshmi Function Hall!
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="border p-3 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="tel"
                placeholder="Enter phone number"
                className="border p-3 rounded-lg"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
              />

              {error && <p className="text-red-500 text-center">{error}</p>}

              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}
