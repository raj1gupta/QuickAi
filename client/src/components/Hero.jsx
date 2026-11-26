import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-gradient-to-b from-[#F4F2FF] via-white to-white min-h-screen pt-20">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create amazing content <br /> with{' '}
          <span className="text-[#5044E5]">AI tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate('/ai')}
          className="bg-[#5044E5] text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Start creating now
        </button>
        <button
          onClick={() => navigate('/ai/community')}
          className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Explore community
        </button>
      </div>

      <div className="flex items-center gap-3 mt-8 mx-auto text-gray-600 text-sm">
        <div className="flex -space-x-2">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100"
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
        </div>
        <span className="flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-[#5044E5]" /> Trusted by 10k+ people
        </span>
      </div>
    </div>
  );
};

export default Hero;
