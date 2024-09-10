import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Addcustomer = () => {
  const [activeTab, setActiveTab] = useState('Customer Details');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pendingBalance: '',
    product: '',
    price: ''
  });
  const navigate = useNavigate();

  const tabs = ['Customer Details', 'Product Selection'];
  const products = [
    { name: 'Pouch Curd 400g' },
    { name: 'Cup Curd 200g' },
    { name: 'Cup Curd 85g' },
    { name: 'Curd 1kg' },
    { name: 'Curd 5kg' },
    { name: 'Milk FCM' },
    { name: 'Milk SM' },
    { name: 'Milk TM' }
  ];

  const handleNext = () => {
    setActiveTab('Product Selection');
  };

  const handleBack = () => {
    setActiveTab('Customer Details');
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Implement submit functionality here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='p-6 max-w-4xl mx-auto'>
        <div className='flex space-x-3'>
        <FaArrowLeftLong size={26}  onClick={() => navigate(-1)}
        />

<h2 className="text-2xl font-bold mb-6">Add New Customer</h2>
        </div>
        

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-300 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3 text-center text-sm sm:text-base font-medium ${
              activeTab === tab ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="bg-white p-6 border border-gray-200 rounded-md shadow-sm">
        {activeTab === 'Customer Details' && (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Customer Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter customer name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
              <input
                type="text"
                name="phone"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter mobile number"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter address"
                onChange={handleChange}
                value={formData.address}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Pending Balance</label>
              <input
                type="number"
                name="pendingBalance"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter pending balance"
                onChange={handleChange}
                value={formData.pendingBalance}
              />
            </div>
            <div className='flex justify-end'>
              <button
                className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {activeTab === 'Product Selection' && (
          <div>
            <div className="mb-4">
              <p className='text-sm text-gray-600'>
                Add price and quantity to make the daily sale easier. Enter the number of liters you will sell to customers daily.
              </p>
            </div>

            <div className="space-y-4">
              {products.map((product, index) => (
                <div key={index}>
                  <label className="block text-purple-600 font-semibold text-md mb-1">{product.name}</label>
                  <div className="flex space-x-4">
                    <input
                      type="number"
                      placeholder="Price"
                      className="border border-gray-300 p-2 rounded-md w-1/2"
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                    <input
                      type="number"
                      placeholder="Liters"
                      className="border border-gray-300 p-2 rounded-md w-1/2"
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="text-gray-700 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={() => navigate("/customer")}

              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addcustomer;
