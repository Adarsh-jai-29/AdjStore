import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Validation
  const validateForm = () => {
    let newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  // Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", { email, password });
      alert("Login successful!");
      // 🚀 Here you can call API -> /login
    } else {
      console.log("Form has validation errors.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl">
        <div className="bg-white/95 rounded-3xl shadow-2xl px-10 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-2 font-extrabold">Login</h2>
            <p className="text-gray-600">Welcome back! Please login.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="font-medium text-gray-700">
                Email Address
              </label>
              <input
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                type="email"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                  focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 
                  focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="font-medium text-gray-700">
                Password
              </label>
              <input
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={handleChange}
                autoComplete="on"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                  focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 
                  focus:scale-105 focus:shadow-lg hover:border-gray-300 hover:bg-white"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="h-14 mt-2 bg-[#6254Fc] text-white font-bold rounded-xl duration-300 hover:bg-black"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
