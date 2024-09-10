import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    unit: '',
    price: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Implement submit functionality here
  };

  return (
    <div className='p-6 max-w-lg mx-auto'>
        <div className='flex space-x-3'>
        <FaArrowLeftLong size={26} className=' hover:cursor-pointer'  onClick={() => navigate(-1)}
        />
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
</div>
      <div className="bg-white p-6 border border-gray-200 rounded-md shadow-sm">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="productName"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter product name"
            onChange={handleInputChange}
            value={formData.productName}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Choose Unit</label>
          <select
            name="unit"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleInputChange}
            value={formData.unit}
          >
            <option value="">Select unit</option>
            <option value="gram">Gram</option>
            <option value="kilogram">Kilogram</option>
            <option value="milliliter">Milliliter</option>
            <option value="liter">Liter</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter price"
            onChange={handleInputChange}
            value={formData.price}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={() => navigate("/Product")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
