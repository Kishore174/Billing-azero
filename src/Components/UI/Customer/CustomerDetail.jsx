import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Pagination from '../../Pagination'; // Import the Pagination component
 

const customers = [
  {
    name: 'KISHORE',
    phone: '7010731303',
    pendingBalance: 5020,
    
  },
  {
    name: 'MADHESH',
    phone: '7010731304',
    pendingBalance: 3000,
   
  },
  {
    name: 'AZERO',
    phone: '7010731307',
    pendingBalance: 2500,
   
  },
];
const productsPerPage = 6; 

const CustomerDetail = () => {
   
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(customers.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // const navigate = useNavigate();

  const paginatedProducts = customers.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  return (
    <div className='mt-8'>
      <div className='flex justify-between poppins-bold  p-2 mb-4'>
        <h1 className="text-3xl font-extrabold pt-2 poppins-bold text-left text-gray-800">
          Total Members - <span>{customers.length}</span>
        </h1>
        <Link to ="/addcustomer">
        <button  className='bg-purple-600 text-white flex py-3 px-3 rounded-md mb-4'>
          <PlusIcon className='h-5 w-5' />
          Add Customer
        </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customers.map((customer, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-md p-4">
            <div className="text-black poppins-bold text-xl">{customer.name}</div>
            <div className="text-gray-500 poppins-regular text-sm">{customer.phone}</div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <div className="text-black poppins-regular text-sm">Pending Balance</div>
                <div className="text-red-500 poppins-bold text-xl">
                  <span className='roboto-bold'>₹</span>{customer.pendingBalance}
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
  );
};

export default CustomerDetail;
