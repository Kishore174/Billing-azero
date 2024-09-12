import { useState } from 'react'; 
import { PlusIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import file from "../../Assets/invoice.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaFileAlt, FaFilePdf } from 'react-icons/fa';

const customers = [
  {
    name: 'RK TeaStall',
    amount: 3404,
  },
  {
    name: 'Milk Shop',
    amount: 5650,
  },
  {
    name: 'RK TeaStall',
    amount: 3404,
  },
  {
    name: 'Milk Shop',
    amount: 5650,
  },
];

const Customer = () => {
  return (
    <div>
      <div className='flex justify-between poppins-bold mb-5 p-5'>
        <h1 className="text-3xl pt-3 font-extrabold poppins-bold text-left text-gray-800">
          Total Customer - <span>{customers.length}</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-4"
          >
            <div className="flex items-center space-x-4">
              <img src={file} alt="file" className='h-8'/>
              <div className="text-black text-lg poppins-medium">
                {customer.name}
              </div>
            </div>

            <div className="mt-4">
                <Link to ="/Invoice">
              <button className="bg-purple-600 w-full text-white text-xl poppins-semibold py-1 rounded-md">
                {customer.amount.toLocaleString()} 
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
