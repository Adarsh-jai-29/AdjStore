import React, { useState } from "react";

export default function SignUp() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div>
          {/* Main Container */}
          <div className="w-full ">
            {/* Glass Card */}
            <div className="bg-white/95 rounded-3xl shadow-2xl !p-10  ">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl mb-2 font-extrabold ">
                  Create Account
                </h2>
                <p className="text-gray-600  text-2xl">
                  Join thousands of users and start your journey today
                </p>
              </div>
              {/* Form */}
              <form className="">
              <div className="text-2xl flex flex-col gap-2">
                {/* Name Fields */}
                <div className="flex gap-4  md:flex-row flex-col">
                  <div className="">
                    <label
                      htmlFor="first-name"
                      className=" text-2xl font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                    />
                  </div>
                  <div className=" ">
                    <label
                      htmlFor="last-name"
                      className=" text-2xl font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                    />
                  </div>
                </div>
                {/* Email Field */}
                <div className="flex gap-4 justify-between items-center md:flex-row flex-col w-full">
                  <label htmlFor="email" className=" text-2xl font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                  />
                </div>
                {/* Password Field */}
                <div className="flex gap-4 justify-between items-center md:flex-row flex-col w-full  ">
                  <label className=" text-2xl font-medium text-gray-700">
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    className="w-full  py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                  />
                  {/* Password Strength Bar
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full transition-all duration-300" />
          </div> */}
                </div>
                {/* Confirm Password Field */}
                <div className="flex gap-4 justify-between items-center md:flex-row flex-col w-full ">
                  <label className=" text-2xl font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                  />
                </div>
                 {/* Mobile Number Field */}
                <div className="flex gap-4 justify-between items-center md:flex-row flex-col w-full ">
                  <label className=" text-2xl font-medium text-gray-700">
                    Mobile no.
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                  />
                </div>
                {/* Terms Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 mt-0.5 accent-indigo-600"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" text-2xl text-gray-600  leading-relaxed "
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
                    >
                      Terms of Service
                    </a>
                    and{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className=" h-14 m-2 bg-[#6254Fc] text-white font-bold rounded-xl duration-300 overflow-hidden hover:bg-black"
                >
                  <span className=" z-10 text-white ">Sign Up</span>
                </button>
            </div>
              </form>
              {/* Divider */}
              {/* <div className="flex items-center my-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <span className="px-4  text-2xl text-gray-500 bg-white/90">or continue with</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div> */}
              {/* Social Buttons */}
              {/* <div className="grid grid-cols-2 gap-3 mb-8">
        
      </div> */}
              {/* Login Link */}
              <div className="text-center ">
                <p className=" text-2xl text-gray-600">
                  Already have an account?
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline transition-colors duration-200"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
