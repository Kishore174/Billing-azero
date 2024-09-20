import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const  UpdatePrice = () => {
  const [openProduct, setOpenProduct] = useState(null);

  const toggleProduct = (productName) => {
    setOpenProduct(openProduct === productName ? null : productName);
  };
  const navigate = useNavigate();


  const products = [
    {
      name: 'TM Milk',
      prices: [45, 46, 49],
    },
    {
      name: 'FCM MILK',
      prices: [56,32,43],
    },
    {
      name: '85g Cup Curd',
      prices: [34,34,43],
    },
    {
      name: '200g Cup Curd',
      prices: [43,34],
    },
    {
      name: '400g Pouch Curd',
      prices: [65,65],
    },
    {
      name: '5kg Curd',
      prices: [87,45],
    },
    {
      name: '1kg Curd',
      prices: [100,96,105],
    },
  ];

  return (
    <div className="p-4 w-4/6 mx-auto">
            <div className='flex space-x-3'>
        <FaArrowLeftLong size={26} className=' hover:cursor-pointer'  onClick={() => navigate(-1)}
        />
      <h2 className="text-2xl font-bold mb-6">Update your price</h2>
</div>
      {products.map((product, index) => (
        <div key={index} className="  border-gray-300 mb-2">
          <button
            onClick={() => toggleProduct(product.name)}
            className=" w-full flex justify-between items-center p-4 bg-white border rounded-lg"
          >
            <span>{product.name}</span>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                openProduct === product.name ? 'rotate-180' : 'rotate-0'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openProduct === product.name && product.prices.length > 0 && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <table className="table-auto w-full mb-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Current Price</th>
                    <th className="px-4 py-2">New Price</th>
                  </tr>
                </thead>
                <tbody>
                  {product.prices.map((price, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{price}</td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          defaultValue={price}
                          className="w-full p-2 border rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Update
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default  UpdatePrice;
