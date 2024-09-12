import React from "react";
import logo from "../../Assets/logo01.png";

const Invoice = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-300 rounded poppins-medium shadow-sm my-6" id="invoice">
      <div className="grid grid-cols-2 items-center">
        <div>
          {/* Company Logo */}
          <img src={logo} alt="company-logo" height="100" width="100" />
        </div>
        <div className="text-right poppins-medium">
          <p className="poppins-bold">TopSun Ventures.</p>
          <p className="text-gray-500 text-sm">topsunventures@gmail.com</p>
          <p className="text-gray-500 text-sm mt-1">+41-442341232</p>
          <p className="text-gray-500 text-sm mt-1">VAT: 8657671212</p>
        </div>
      </div>

      {/* Client Info */}
      <div className="grid grid-cols-2 items-center mt-8">
        <div>
          <p className="font-bold text-gray-800">Bill to :</p>
          <p className="text-gray-500">
            Laravel LLC.<br />102, San-Fransico, CA, USA
          </p>
          <p className="text-gray-500">info@laravel.com</p>
        </div>
        <div className="text-right">
          <p>Invoice number: <span className="text-gray-500">INV-2023786123</span></p>
          <p>Invoice date: <span className="text-gray-500">03/09/2023</span><br />Due date: <span className="text-gray-500">31/07/2023</span></p>
        </div>
      </div>

      {/* Invoice Items */}
      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0">Items</th>
              <th className="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell">Quantity</th>
              <th className="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell">Morning</th>
              <th className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold sm:pr-0">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Existing items */}
            <tr className="border-b border-gray-200">
              <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div className="font-medium text-gray-900">RK Tea Stall</div>
                <div className="mt-1 truncate text-gray-500">Vellore</div>
              </td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">2</td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">₹12 Ltrs</td>
              <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">₹5,000.00</td>
            </tr>
            {/* FCM MILK Entry */}
            <tr className="border-b border-gray-200">
              <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div className="font-medium text-gray-900">FCM MILK</div>
                <div className="mt-1 truncate text-gray-500">36 LITRE * ₹62</div>
              </td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">36</td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">₹62 Ltrs</td>
              <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">₹2,232.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3" className="hidden pl-4 pr-3 pt-6 text-right text-sm text-gray-500 sm:table-cell sm:pl-0">Subtotal</th>
              <td className="pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0">₹12,732.00</td>
            </tr>
            {/* More footer rows for Tax, Discount, etc. */}
          </tfoot>
        </table>
      </div>

       <div>
         <div className="flex justify-between">
       <div className="p-4   ">
    <p className="  font-semibold text-md">Total Liter</p>
    <p className="text-green-500  text-sm">36L</p>
    <p className="font-semibold text-md mt-4">GST</p>
    <p className="text-gray-500 text-sm">5%</p>
  </div>
  <div className="p-4             ">
    <p className=" font-semibold text-md">Previous Month</p>
    <p className="text-sm text-red-400">₹744</p>
    <p className="font-semibold text-md mt-4">Current Month</p>
    <p className="text-gray-500 text-sm">₹2,232</p>
  </div>
  </div>
  <div className="flex justify-between">
  <div className="p-4     ">
    <p className=" font-semibold text-md">Received Amount</p>
    <p className="text-gray-500 text-sm">₹0</p>
  </div>

  {/* Total Amount */}
  <div className="p-4   mr-4 ">
    <p className=" font-semibold text-md">Total Amount</p>
    <p className="text-gray-500  poppins-medium text-sm">₹14,976</p>
  </div>
  </div>
       </div>
 


      {/* Footer */}
      <div className="border-t-2 pt-4 text-xs text-gray-500 text-center mt-16">
        Please pay the invoice before the due date. You can pay by logging into your account.
      </div>
    </div>
  );
};

export default Invoice;
