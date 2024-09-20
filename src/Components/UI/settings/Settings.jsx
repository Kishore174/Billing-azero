import React from 'react';
import { PencilIcon, LockClosedIcon, CreditCardIcon, CogIcon, GlobeAltIcon, UploadIcon, LogoutIcon, TrashIcon } from '@heroicons/react/outline'; // Import icons from Heroicons
import { MdPayment } from 'react-icons/md';

const Settings = () => {
  const settingsOptions = [
    { name: 'Update Profile', icon: <PencilIcon className="h-6 w-6" />, link: '/profile' },
    { name: 'Change Password', icon: <LockClosedIcon className="h-6 w-6" />, link: '/profile' },
    { name: 'GST', icon: <CogIcon className="h-6 w-6" />, link: '#' },
    { name: 'Upload QR', icon: <UploadIcon className="h-6 w-6" />, link: '#' },
    { name: 'Bulk Price Update', icon: <CreditCardIcon className="h-6 w-6" />, link: '/updateprice' },
    { name: 'Payment method', icon: <MdPayment className="h-6 w-6" />, link: '/paymentmethod' },
    { name: 'Delete My Account', icon: <TrashIcon className="h-6 w-6" />, link: '#' },
    { name: 'My Data', icon: <TrashIcon className="h-6 w-6" />, link: '#' },
    { name: 'Logout', icon: <LogoutIcon className="h-6 w-6" />, link: '/' },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-4">
        {settingsOptions.map((option) => (
          <a
            href={option.link}
            key={option.name}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-100"
          >
            <div className="flex items-center space-x-4">
              {option.icon}
              <span>{option.name}</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Settings;
