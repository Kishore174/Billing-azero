import React, { useState } from 'react';
import Navbar from './Navbar';
import SideNav from './SideNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <SideNav isOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'ml-16 md:ml-64' : 'md:ml-64 ml-16 '
        }`}
      >
        <Navbar />

        <main className="flex-1 p-4 mt-20">
          <Outlet />
        </main>
      </div>

      {/* Button to toggle sidebar on mobile */}
    </div>
  );
};

export default Main;
