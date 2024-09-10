import React from 'react';
import { FaChevronDown, FaBell } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import profile from '../Assets/profile.jpg';

const Navbar = () => {
  return (
    <div className="bg-white fixed hidden md:flex  top-0 w-full h-20 shadow-md text-black  items-center justify-between px-6 md:px-12 lg:px-20 z-10">
      {/* Left Side: Search Bar */}
      <div className="flex items-center justify-between w-[80%]">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg px-8 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          <BiSearch className="text-gray-300 absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </div>

        {/* Right Side: Notifications and Profile */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          {/* Notification Icon */}
          <FaBell className="text-gray-600 w-6 h-6 cursor-pointer hover:text-gray-800" />

          {/* Profile Section */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src={profile}
              alt="Profile"
              className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div className="hidden md:flex flex-col text-right">
              <span className="font-semibold text-lg">Azero</span>
              <span className="text-gray-600 text-sm">Admin</span>
            </div>
            <FaChevronDown className="text-gray-600 hover:text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
