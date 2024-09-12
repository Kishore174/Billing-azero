import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaBell } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import profile from '../Assets/profile.jpg';

const Navbar = () => {
  // State to toggle the dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [NotificationOpen, setNotificationOpen] = useState(false);

  const menuRef = useRef(null);  // Ref for the dropdown menu

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const NotificationDown = () => {
    setNotificationOpen(!NotificationOpen);
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="bg-white fixed hidden md:flex top-0 w-full h-20 shadow-md text-black items-center justify-between px-6 md:px-12 lg:px-20 z-10">
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
          <div className="relative inline-block" onClick={NotificationDown}>
            <FaBell className="text-gray-600 w-6 h-6 cursor-pointer hover:text-gray-800" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
              3
            </span>
          </div>
          {NotificationOpen && (
              <div className="absolute top-10 right-0 left-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20">
                <a
                  href="#profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}

          {/* Profile Section */}
          <div className="relative flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown} ref={menuRef}>
            <img
              src={profile}
              alt="Profile"
              className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div className="hidden md:flex flex-col text-right">
              <span className="font-semibold text-lg">Azero</span>
              <span className="text-gray-600 text-center text-sm">Admin</span>
            </div>
            <FaChevronDown className="text-gray-600 hover:text-gray-800" />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-10 right-0 left-0.5 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20">
                <a
                  href="#profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
