import React from 'react';
import { 
  UserIcon, 
  TruckIcon, 
  ChartBarIcon, 
  ClipboardListIcon, 
  CubeIcon, 
  CreditCardIcon, 
  CogIcon 
} from '@heroicons/react/outline';
import { TbInvoice } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r poppins-regular  p-3">
      <div className='flex justify-left'>
        {/* <span><MdOutlineKeyboardDoubleArrowLeft size={24} /></span> */}
        <h1 className="text-3xl  font-extrabold poppins-bold text-left text-gray-800 mb-8">Dashboard</h1>
      </div>
      
      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        <Link to="/customer">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-blue-200 h-full">
            <div className="bg-blue-100 p-4 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <UserIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Customer</h2>
            <p className="text-center text-sm text-gray-600">Manage customer information and activity.</p>
          </div>
        </Link>

        <Link to="/DeliveryPartner">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-green-200 h-full">
            <div className="bg-green-100 p-4 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <TruckIcon className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Delivery Partner</h2>
            <p className="text-center text-sm text-gray-600">Track and manage delivery partners.</p>
          </div>
        </Link>

        <Link to="/Product">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-pink-200 h-full">
            <div className="bg-pink-100 p-4 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <CubeIcon className="h-8 w-8 text-pink-600" />
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Products</h2>
            <p className="text-center text-sm text-gray-600">Manage and update product listings.</p>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-orange-200 h-full">
          <div className="bg-orange-100 p-4 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
            <TbInvoice className="h-8 w-8 text-orange-600" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Invoice</h2>
          <p className="text-center text-sm text-gray-600">Download your Invoice</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-purple-200 h-full">
          <div className="bg-purple-100 p-4 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
            <ClipboardListIcon className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Report</h2>
          <p className="text-center text-sm text-gray-600">Access detailed reports and insights.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-200 h-full">
          <div className="bg-gray-100 p-4 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CogIcon className="h-8 w-8 text-gray-600" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Settings</h2>
          <p className="text-center text-sm text-gray-600">Adjust application settings and preferences.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
