import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import Logo from './Logo';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
      <Logo onClick={() => navigate('/')} />

      {user ? (
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/ai')}
            className="text-sm font-medium text-gray-700 hover:text-[#5044E5] cursor-pointer"
          >
            Dashboard
          </button>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn()}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#5044E5] text-white px-10 py-2.5 hover:bg-[#4338ca] transition"
        >
          Get started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
