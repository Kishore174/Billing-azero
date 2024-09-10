import React, { useState } from 'react';
import { FaChevronDown, FaSignOutAlt, FaHome, FaMoneyBill, FaMale, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideNav = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: FaHome },
    { name: 'Customer', path: '/customer', icon: FaUser },

    { name: 'Payment', path: '/payment', icon: FaMoneyBill },
    { name: 'Logout', path: '/', icon: FaSignOutAlt },
  ];

  return (
    <div
      className={`fixed h-screen bg-white roboto-bold shadow-lg space-y-4 pt-3 text-black transition-all duration-300  ${
        isOpen ? 'w-64' : 'w-16 md:w-64'
      }`}
    >
      <div className='h-16   md:w-36 flex justify-center mx-auto  bg-white shadow-md'>

      </div>
       

      {/* Menu Items */}
      <div className="flex-1 flex flex-col">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;

          return (
            <li key={item.name} className="list-none">
              <Link to={item.path}>
                <button
                  onClick={() => setActiveItem(item.name)}
                  className={`flex items-center justify-center md:justify-start space-x-4 px-4 md:px-6 py-3 font-semibold w-full transition-colors duration-300 ${
                    isActive
                      ? 'border-l-4 border-purple-700 text-purple-600 poppins-semibold bg-gray-100'
                      : 'poppins-regular text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                  <span className={`hidden md:inline ${isOpen ? 'hidden' : ''}`}>{item.name}</span>
                </button>
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
