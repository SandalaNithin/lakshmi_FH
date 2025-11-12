import { useState } from "react";
import { CalendarDays, Clock, Check, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BookingCalendar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", eventType: "", guests: "", fromDate: "", toDate: "", checkIn: "", checkOut: "", message: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.includes("@")) e.email = "Valid email required";
    if (formData.phone.length !== 10) e.phone = "Enter a 10-digit phone number";
    if (!formData.eventType) e.eventType = "Select an event type";
    if (!formData.guests || formData.guests <= 0) e.guests = "Enter number of guests";
    if (!formData.fromDate) e.fromDate = "From date required";
    if (!formData.toDate) e.toDate = "To date required";
    if (!formData.checkIn) e.checkIn = "Check-in time required";
    if (!formData.checkOut) e.checkOut = "Check-out time required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) return setErrors(newErrors);
    setSuccess("✅ Booking request submitted successfully!");
    setTimeout(() => navigate("/"), 2500);
    setFormData({ name: "", email: "", phone: "", eventType: "", guests: "", fromDate: "", toDate: "", checkIn: "", checkOut: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-indigo-700 py-8 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold">Book Your Event</h1>
        <p className="text-indigo-200 mt-2 text-lg">Reserve your perfect day at Lakshmi Function Hall</p>
      </div>

      <div className="flex-grow flex justify-center items-start py-12 px-4">
        <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          {success && (
            <div className="p-4 mb-8 bg-green-50 border-l-4 border-green-600 text-green-700 rounded-lg flex items-center gap-2 text-sm font-semibold">
              <Check size={20} />{success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Full Name *", name: "name", type: "text", placeholder: "Enter your full name" },
                { label: "Phone Number *", name: "phone", type: "tel", placeholder: "10-digit number" },
                { label: "Email Address *", name: "email", type: "email", placeholder: "example@email.com" }
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label className="block font-semibold text-gray-700 mb-2">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={name === "phone" ? (e) =>
                      setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }) : handleChange}
                    placeholder={placeholder}
                    className={`w-full border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none`}
                  />
                  {errors[name] && <p className="text-red-600 text-sm mt-1">{errors[name]}</p>}
                </div>
              ))}

              <div>
                <label className="block font-semibold text-gray-700 mb-2">Event Type *</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={`w-full border ${errors.eventType ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none`}
                >
                  <option value="">Select Event</option>
                  {["Wedding", "Birthday", "Corporate", "Engagement", "Other"].map((ev) => (
                    <option key={ev} value={ev}>{ev}</option>
                  ))}
                </select>
                {errors.eventType && <p className="text-red-600 text-sm mt-1">{errors.eventType}</p>}
              </div>
            </div>

            
            {/* Event Dates */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-4 flex items-center gap-2">
                <CalendarDays size={40} /> Event Dates
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    From (Check-In Date) *
                  </label>
                  <input
                    type="date"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.fromDate ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none`}
                  />
                  {errors.fromDate && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.fromDate}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    To (Check-Out Date) *
                  </label>
                  <input
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.toDate ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none`}
                  />
                  {errors.toDate && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.toDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Check-in / Check-out Times */}
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    <Clock size={18} className="inline mr-1" />
                    Check-In Time *
                  </label>
                  <input
                    type="time"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.checkIn ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none`}
                  />
                  {errors.checkIn && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.checkIn}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    <Clock size={18} className="inline mr-1" />
                    Check-Out Time *
                  </label>
                  <input
                    type="time"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.checkOut ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none`}
                  />
                  {errors.checkOut && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.checkOut}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Users size={18} />Number of Guests *
              </label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                className={`w-full border ${errors.guests ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none`}
                placeholder="e.g., 250"
              />
              {errors.guests && <p className="text-red-600 text-sm mt-1">{errors.guests}</p>}
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Tell us more about your event requirements..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button type="submit" className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition shadow-md hover:shadow-lg">
                Submit Booking
              </button>
              <button type="button" onClick={() => setFormData({
                name: "", email: "", phone: "", eventType: "", guests: "", fromDate: "", toDate: "", checkIn: "", checkOut: "", message: ""
              })} className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
