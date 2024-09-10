import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import delvery from "../../Assets/DeliveryPerson.jpg"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Pagination from '../../Pagination'; // Import the Pagination component

const customers = [
    {
      name: 'KISHORE',
      phone: '7010731303',
      pendingBalance: 5020,
      availableBalance: 120,
    },
    {
      name: 'MADHESH',
      phone: '7010731304',
      pendingBalance: 3000,
      availableBalance: 150,
    },
    {
      name: 'AZERO',
      phone: '7010731307',
      pendingBalance: 2500,
      availableBalance: 90,
    },
  ];
  const productsPerPage = 6; 
const DeliveryPartner = () => {
   
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(customers.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const navigate = useNavigate();

  const paginatedProducts = customers.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  
  
    const tabs = ['Customer Details', 'Product Selection'];
  return (
    <div>
    <div className='flex justify-between poppins-bold   mb-5 p-5'>
      <h1 className="text-3xl pt-3 font-extrabold poppins-bold text-left text-gray-800">
        Total Members - <span>{customers.length}</span>
      </h1>
      <Link to ="/addpartner">
      <button   className='bg-purple-600 text-white flex py-3 px-3 rounded-md mb-4'>
        <PlusIcon className='h-5 w-5' />
        Add Delivery Partner
      </button>
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {customers.map((customer, index) => (
    <div
      key={index}
      className="bg-white rounded-xl border border-gray-200 shadow-lg p-6   duration-300 ease-in-out"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="  ">
            <img src={delvery} alt="delviry" className='rounded-full h-20 w-20' />
          </div>
          <div>
            <div className="text-black font-semibold text-xl">{customer.name}</div>
            <div className="text-gray-500 text-sm">{customer.phone}</div>
          </div>
        </div>
         
      </div>
    </div>
  ))}
</div>


<Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
  </div>
  )
}

export default DeliveryPartner