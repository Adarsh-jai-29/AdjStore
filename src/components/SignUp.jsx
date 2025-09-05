import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNo: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});



  const handelChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.mobileNo) {
      newErrors.mobileNo = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobileNo)) {
      newErrors.mobileNo = "Enter a valid 10-digit mobile number";
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept terms & conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    }
    

   const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
    console.log("Form Submitted ✅", formData)
    }
    console.log(formData);
    
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-max bg-gray-100">
        <div>
          {/* Main Container */}
          <div className="w-full max-w-xl">
            {/* Glass Card */}
            <div className="bg-white/95 rounded-3xl shadow-2xl px-10 py-6  ">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl mb-2 font-extrabold ">
                  Create Account
                </h2>
                <p className="text-gray-600  ">
                  Join thousands of users and start your journey today
                </p>
              </div>
              {/* Form */}
              <form className="" onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-2">
                {/* Name Fields(first and last) */}
                <div className="flex gap-4  md:flex-row flex-col">
                  <div className="w-full">
                    <label
                      htmlFor="first-name"
                      className="  font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      value={formData.firstName}
                      onChange={(e) => handelChange(e)}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                    />
                    {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
                  </div>
                  <div className=" ">
                    <label
                      htmlFor="last-name"
                      className="  font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      id="last-name"
                      value={formData.lastName}
                       onChange={(e) => handelChange(e)}
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                    />
                  </div>
                </div>
                {/* Email Field */}
                <div className="">
                  <label htmlFor="email" className="  font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handelChange(e)}
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                  />
                   {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
                </div>
                {/* Password Field */}
                <div className=" ">
                  <label className="  font-medium text-gray-700">
                    Password{" "}
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    autoComplete="on"
                     onChange={(e) => handelChange(e)}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                  />
                  {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
                  {/* Password Strength Bar
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full transition-all duration-300" />
          </div> */}
                </div>
                {/* Confirm Password Field */}
                <div className="">
                  <label className="  font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    autoComplete="on"
                    onChange={(e) => handelChange(e)}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                  />
                 {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
                </div>
                 {/* Mobile Number Field */}
                <div className=" ">
                  <label className="  font-medium text-gray-700">
                    Mobile no.
                  </label>
                  <input
                    type="number"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={(e) => handelChange(e)}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
                  />
                   {errors.mobileNo && (
                <p className="text-red-500 text-sm">{errors.mobileNo}</p>
              )}
                </div>
                {/* Terms Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={formData.termsAccepted}
                    name="termsAccepted"
                    onChange={(e) => handelChange(e)}
                    className="w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 mt-0.5 accent-indigo-600"
                  />
                  <label
                    htmlFor="checkbox"
                    className="  text-gray-600  leading-relaxed "
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
                    >
                      Terms of Service
                    </a>
                    {" "}and{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
                 {errors.termsAccepted && (
              <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
            )}
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
        <span className="px-4   text-gray-500 bg-white/90">or continue with</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div> */}
              {/* Social Buttons */}
              {/* <div className="grid grid-cols-2 gap-3 mb-8">
        
      </div> */}
              {/* Login Link */}
              <div className="text-center ">
                <p className="  text-gray-600">
                  Already have an account?
                  <NavLink
                    to={"/login"}
                    className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline transition-colors duration-200"
                  >
                    Log in
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
