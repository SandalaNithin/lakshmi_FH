import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Main from "../assets/Main.jpg";

export default function Contact() {
  const navigate = useNavigate();

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
                src={Main}
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
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 pt-6 md:pt-12">
              Contact Us to Book Lakshmi Function Hall Near <br />
              BuchiReddyPalem for Your Events
            </h1>
            <p className="text-gray-700 mb-4">
              Thank you for considering Lakshmi Function Halls for your event
              needs.
            </p>
            <p className="text-gray-700">
              For banquet hall booking inquiries, please contact our event
              specialists. They will be delighted to assist you in tailoring
              your event to your needs, offering insights into our venue's
              capabilities & providing pricing information.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <h2 className="text-4xl font-bold text-amber-900 mb-10 text-center">
        Book Hall
      </h2>

      {/* Booking Button */}
      <div className="flex justify-center mb-16">
        <button
          onClick={() => navigate("/booking")}
          className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-5 px-12 rounded-xl shadow-2xl transition transform hover:scale-105 text-lg"
        >
          📅 Open Booking Hall
        </button>
      </div>

      {/* Contact Info + Map Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 flex flex-col items-center justify-center space-y-6">
          {/* Phone */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition w-full max-w-md">
            <div className="bg-amber-600 p-3 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 text-lg mb-1">Phone</h3>
              <a
                href="tel:7981862253"
                className="text-amber-700 hover:text-amber-800 text-lg"
              >
                7981862253
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition w-full max-w-md">
            <div className="bg-amber-600 p-3 rounded-full">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 text-lg mb-1">Email</h3>
              <a
                href="mailto:Lakshmifunctionhall@gmail.com"
                className="text-amber-700 hover:text-amber-800 break-all text-lg"
              >
                Lakshmifunctionhall@gmail.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition w-full max-w-md">
            <div className="bg-amber-600 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 text-lg mb-1">
                Address
              </h3>
              <p className="text-gray-700">
                Ramakrishnanager, BuchiReddyPalem, Nellore, Andhra Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23431.07905702894!2d79.86867007281447!3d14.539746499402693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c922a8a8209b3%3A0x8a1a4e32b6e4c59e!2sS%20S%20Kalyana%20Mandapam!5e0!3m2!1sen!2sin!4v1761805294698!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - S S Kalyana Mandapam"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}