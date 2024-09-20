import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

const AddDeliverypartner = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const navigate = useNavigate();

  return (
    <div className='p-5 max-w-3xl mx-auto'>
      <div className='flex items-center space-x-3 mb-6'>
        <button
          onClick={() => navigate(-1)}
          className='text-gray-600 hover:text-gray-800'
        >
          <FaArrowLeftLong size={26} />
        </button>
        <h2 className='text-xl font-bold'>Add New Delivery Partner</h2>
      </div>

      {/* Form */}
      <div className='bg-white p-6 border border-gray-200 rounded-md shadow-sm'>
        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-1'>Delivery Partner Name</label>
          <input
            type='text'
            name='name'
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            placeholder='Enter delivery partner name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-1'>Mobile Number</label>
          <input
            type='text'
            name='phone'
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            placeholder='Enter mobile number'
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className='flex justify-end'>
          <button
            onClick={() => navigate('/DeliveryPartner')}
            className='bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDeliverypartner;
