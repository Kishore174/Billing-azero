import React, { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { PlusIcon } from '@heroicons/react/outline';
import Pagination from '../../Pagination'; // Import the Pagination component
import { useNavigate } from 'react-router-dom';

const products = [
  {
    name: 'Milk',
    amount: '₹10.0',
    unit: 'kg',
  },
  {
    name: 'CURD',
    amount: '₹10.0',
    unit: 'kg',
  },
  {
    name: 'Milk',
    amount: '₹10.0',
    unit: 'kg',
  },
  {
    name: 'CURD',
    amount: '₹10.0',
    unit: 'kg',
  }, {
    name: 'Milk',
    amount: '₹10.0',
    unit: 'kg',
  },
  {
    name: 'CURD',
    amount: '₹10.0',
    unit: 'kg',
  },
 
  {
    name: 'CURD',
    amount: '₹10.0',
    unit: 'kg',
  },
];

const productsPerPage = 6; // Number of products per page

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const navigate = useNavigate();

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <>
      <div className='flex justify-between  poppins-bold items-center p-4 mt-6 mb-8'>
        <h1 className="text-3xl font-extrabold text-gray-800">
          Total Products - <span>{products.length}</span>
        </h1>
        <button
          onClick={() => navigate("/addproduct")}
          className='bg-purple-600 text-white flex items-center py-2 px-4 rounded-md shadow hover:bg-purple-700 transition'
        >
          <PlusIcon className='h-5 w-5 mr-2' />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginatedProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <MdModeEdit className="text-gray-500 text-2xl cursor-pointer" />
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Price: <span>{product.amount}</span></p>
              <p className="text-gray-700">Unit: <span>{product.unit}</span></p>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 px-4 py-2 text-red-500 border border-red-600 rounded hover:bg-red-500 hover:text-white transition">
                <FaTimesCircle />
                <span>Remove</span>
              </button>
              <Link to="/details">
                <button className="px-4 py-2 text-green-500 border border-green-600 rounded hover:bg-green-500 hover:text-white transition">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Product;
