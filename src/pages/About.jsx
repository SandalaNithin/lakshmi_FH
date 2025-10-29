import React from 'react';
import { Heart, Users, Award, Diamond } from 'lucide-react';


export default function AboutUs() {
  const features = [
    {
      icon: Diamond,
      title: 'Versatile Elegance',
      description: 'Our thoughtfully designed spaces adapt seamlessly to any occasion, offering both grandeur and intimacy exactly when you need it.',
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'From state-of-the-art facilities to carefully curated amenities, every detail is crafted with excellence in mind.',
    },
    {
      icon: Users,
      title: 'Dedicated Service',
      description: 'Our experienced team works tirelessly to ensure your event unfolds flawlessly, allowing you to be fully present.',
    },
    {
      icon: Heart,
      title: 'Complete Solutions',
      description: 'Comprehensive event support from planning and coordination to catering and decoration.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-blue-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Lakshmi Function Hall
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Where Every Celebration Finds Its Perfect Home
          </p>
        </div>
      </div>

                                                 {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-16">
            At Lakshmi Function Hall, we believe that life's most cherished moments deserve extraordinary spaces. Whether you're celebrating a wedding, hosting a corporate event, or gathering loved ones for a milestone occasion, we provide the perfect backdrop for memories that last a lifetime.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-blue-600">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Lakshmi Function Hall was born from a simple yet profound realization: every celebration is unique, and the venue should reflect that individuality. What began as a dream to create versatile, elegant spaces has blossomed into a premier destination for those who seek more than just a venue — they seek an experience.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded on the principles of hospitality, attention to detail, and genuine care for our clients, we've transformed countless visions into reality. From intimate gatherings to grand celebrations, we've been honored to play a part in life's most meaningful moments.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left">Our Commitment</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We understand that planning an event can be overwhelming. That's why we've committed ourselves to making the process as smooth and enjoyable as the celebration itself. Our team listens, adapts, and delivers with warmth and professionalism, ensuring that your vision becomes reality without compromise.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every event we host is a partnership built on trust, creativity, and a shared commitment to excellence. We don't just provide a space — we provide peace of mind.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Celebration Awaits</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're dreaming of an elegant wedding reception, a sophisticated corporate gathering, or an intimate family celebration, Lakshmi Function Hall is ready to welcome you.
          </p>
          <p className="text-xl font-semibold mb-8">
            Come visit us, explore our spaces, and let's begin creating something beautiful together.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
            Contact Us Today
          </button>
        </div>

        {/* Tagline */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg italic">
            Lakshmi Function Hall — Creating Memories, Celebrating Life
          </p>
        </div>
      </div>
    </div>
  );
}