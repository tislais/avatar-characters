import React from 'react';

const Header = () => {
  return (
    <header 
      className="bg-white fixed w-full
        h-16 flex items-center pl-4 z-10 border-b-4 border-gray-300">
      <h1 className="text-xl font-semibold text-gray-700 tracking-wide shadow-2xl">Avatar Characters</h1>
    </header>
  )
};

export default Header;