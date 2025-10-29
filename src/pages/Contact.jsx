import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Hero Section */}
      <div className="bg-stone-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Images */}
            <div className="flex gap-4">
              <div className="w-48 h-48 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f29da8c43a?w=400&h=400&fit=crop" 
                  alt="Banquet Hall Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-32 bg-gray-300 rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop" 
                  alt="Event Setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Header Text */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-amber-900 mb-4">
                Contact Us to Book Lakshmi Function Hall BuchiReddyPalem for Your Events
              </h1>
              <p className="text-gray-700 mb-4">
                Thank you for considering Lakshmi Function Halls for your event needs.
              </p>
              <p className="text-gray-700">
                For banquet hall booking inquiries, please contact our event specialists. They will be delighted to assist you in tailoring your event to your needs, offering insights into our venue's capabilities & providing pricing information.
              </p>
            </div>
          </div>
        </div>
      </div>
 ,
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">Book Hall</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-800 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-amber-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-amber-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-amber-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">Message (optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-amber-600 focus:outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-4 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-amber-600 p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Phone</h3>
                <a href="tel:9581490491" className="text-amber-700 hover:text-amber-800 text-xl">
                  9581490491
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-amber-600 p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Email</h3>
                <a 
                  href="mailto:vaaraahi.gachibowli@gmail.com" 
                  className="text-amber-700 hover:text-amber-800 break-all"
                >
                  vaaraahi.gachibowli@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-amber-600 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Gachibowli</h3>
                <p className="text-gray-700">
                  Level 3, SLN Terminus, Jayabheri Enclave, Gachibowli, Hyderabad, Telangana 500032
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop" 
                  alt="Map Location"
                  className="w-full h-full object-cover"
                />
                <div className="text-center mt-2">
                  <a 
                    href="https://maps.google.com/?q=Vaaraahi+Banquets+Gachibowli+Hyderabad" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:text-amber-800 font-medium"
                  >
                    View larger map →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}