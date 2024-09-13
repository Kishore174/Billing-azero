import React, { useState } from 'react';
import { FaSignOutAlt, FaHome, FaMoneyBill, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../Assets/cropped_image.png"
import logo01 from "../Assets/logo01.png";
import { ClipboardListIcon, CogIcon, CubeIcon } from '@heroicons/react/outline';
import { TbInvoice } from 'react-icons/tb';

const SideNav = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name:'Dashboard', path: '/dashboard', icon: FaHome },
    { name:'Customer', path: '/customer', icon: FaUser },
    { name:'Products', path: '/Product', icon:CubeIcon },

    { name:'Payment', path: '/payment', icon: FaMoneyBill },

    { name:'Invoice', path: '/customerpage', icon:TbInvoice },
    { name:'Report', path: '/Product', icon:CogIcon },

    { name:'Settings', path: '/settings', icon:ClipboardListIcon },


    // { name: 'Logout', path: '/', icon: FaSignOutAlt },

  ];

  return (
    <div
      className={`fixed h-screen bg-white roboto-bold shadow-lg space-y-4 pt-3 text-black transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16 md:w-64'
      }`}
    >
     
      <div className=' md:h-24  h-12  md:w-36 flex justify-center mx-auto    '>
<img src={logo01} alt="logo01" />
</div>

     
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
                      ? 'border-l-4 border-purple-700 text-purple-600 bg-gray-100'
                      : 'text-gray-600 hover:bg-gray-100'
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
      <div className=' hidden md:flex '>
      <div className="p-2 border border-gray-300 rounded-lg poppins-bold text-center mx-auto md:w-52   w-full flex flex-col items-center">
  <img
    src={logo}
    alt="Azero Logo"
    className="h-8 w-8 mb-1"  
  />

  {/* <h2 className="font-bold text-xl">Azero Tech</h2> */}
  <p className="text-gray-600 poppins-regular mt-1 text-center text-xs">
    Dedicated to shaping your vision into reality now headquartered in Vellore.
  </p>
  
  <a href="https://azerotech.com/">
    <button className='text-purple-600 underline poppins-regular text-xs mt-2'>
      Know More
    </button>
  </a>

</div>
</div>
</div>
  );
};

export default SideNav;
