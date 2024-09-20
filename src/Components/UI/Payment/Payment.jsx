import React from 'react';

const Payment = () => {
  const payments = [
    {
      customerName: "kishore",
      totalAmount: '₹2000',
      status: {
        received: '₹1500',
        pending: '₹500',
      },
      paymentMethod: 'Credit Card',
    },
    {
      customerName: 'Madhaesh',
      totalAmount: '₹5000',
      status: {
        received: '₹5000',
        pending: '₹0',
      },
      paymentMethod: 'UPI',
    },
    // Add more payment entries as needed
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">Payment Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg border border-gray-200">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold">Customer Name</th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold">Total Amount</th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 border-b text-left text-sm font-semibold">Payment Method</th>
            </tr>  
          </thead>
          <tbody> 
            {payments.map((payment, index) => (
              <tr key={index} className={`bg-gray-${index % 2 === 0 ? '100' : '50'} hover:bg-gray-200`  }>
                <td className="px-6 py-4 border-b text-sm">{payment.customerName}</td>
                <td className="px-6 py-4 border-b text-sm">{payment.totalAmount}</td>
                <td className="px-6 py-4 border-b text-sm">
                  <div className="text-green-500 font-medium">Received:{payment.status.received}</div>
                  <div className={`text-${payment.status.pending === '₹0' ? 'green' : 'red'}-500 font-medium`}>
                    Pending: {  payment.status.pending}
                  </div>
                </td>    
                <td className="px-6 py-4 border-b text-sm">{payment.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
