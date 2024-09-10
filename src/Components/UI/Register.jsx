import React from 'react'
import image from "../Assets/login.jpg";
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-cente overflow-hidden">
      {/* Left Side */}
      <div className="lg:w-1/2 w-full p-4 lg:p-8 bg-white flex flex-col items-center justify-center text-center lg:text-left">
        {/* Logo and Title */}
        <div className="mb-4 lg:mb-6">
          <h1 className="text-4xl font-bold text-purple-600">Billing</h1>
          <p className="text-sm font-semibold text-gray-500 mt-2">
            SaaS Admin Dashboard
          </p>
        </div>
        {/* Welcome Text */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
        {/* Illustration */}
        <img
          src={image}
          alt="Login Illustration"
          className="hidden lg:block w-48 h-auto mt-4"
        />
      </div>

                                                          
      <div className="lg:w-1/2 w-full  p-4 lg:p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Sign In Text */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-6"> Sign Up your account</h2>
          {/* Form */}
          <form>
          <div className="mb-3 lg:mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-200 focus:outline-none"
              />
            </div>
            <div className="mb-3 lg:mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="demo@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-200 focus:outline-none"
              />
            </div>
            <div className="mb-3 lg:mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Mobile Number</label>
              <input
                type="phone"
                placeholder="12345xxxxx"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-200 focus:outline-none"
              />
            </div>
            <div className="mb-3 lg:mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-200 focus:outline-none"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-600">Remember my preference</label>
            </div>
            <Link to="/">
              <button
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
              >
                Sign Up
              </button>
            </Link>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Register