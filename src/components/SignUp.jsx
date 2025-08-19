import React, { useState } from "react";

export default function SignUp() {
  return (<>
        <h1>Work In Progress...</h1>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
    </>

  );
}
