import React, { useState } from 'react';

const PaymentMethod = () => {
  const [upiID, setUpiID] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  const handleUpiSubmit = (e) => {
    e.preventDefault();
    // Add your UPI form submission logic here
    alert(`UPI ID Submitted: ${upiID}`);
  };

  const handleBankSubmit = (e) => {
    e.preventDefault();
    // Add your bank form submission logic here
    alert(`Bank Details Submitted: Account No: ${accountNumber}, IFSC: ${ifscCode}`);
  };

  return (
    <div className="max-w-lg mx-auto poppins-bold p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Payment Link</h2>
      <p className="mb-4 text-sm text-gray-600">
        Enter your UPI ID to receive payment from the customer application. Make sure you are entering the UPI ID correctly.
        Milk Wala is not responsible for any false payment due to wrong UPI ID.
        <br />
        <span className="text-red-600  text-xs font-bold">* UPI ID must be of BUSINESS ACCOUNT</span>
      </p>

      {/* UPI ID Section */}
      <div className="mb-6">
        <form onSubmit={handleUpiSubmit}>
          <div className="mb-4">
            <label htmlFor="upiID" className="block text-sm font-medium text-gray-700 mb-1">
              UPI ID
            </label>
            <input
              type="text"
              id="upiID"
              className="w-full px-3 py-2 border poppins-regular border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your UPI ID"
              value={upiID}
              onChange={(e) => setUpiID(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit UPI ID
          </button>
        </form>
      </div>

      {/* Separator */}
      <hr className="my-6" />

      {/* Bank Details Section */}
      <div className="mb-6">
        <form onSubmit={handleBankSubmit}>
          <div className="mb-4">
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Bank Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              className="w-full px-3 py-2 border border-gray-300  poppins-regular rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your account number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700 mb-1">
              IFSC Code
            </label>
            <input
              type="text"
              id="ifscCode"
              className="w-full px-3 py-2 border border-gray-300  poppins-regular rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your IFSC code"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit Bank Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethod;
