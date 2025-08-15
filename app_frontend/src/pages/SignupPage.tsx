// src/pages/SignupPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6">
      <div className="w-full max-w-md">
        <h2 className="text-5xl font-extrabold text-white text-center mb-10 drop-shadow-lg">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="px-5 py-3 rounded-xl bg-white/20 border border-white/40 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 backdrop-blur-sm"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="px-5 py-3 rounded-xl bg-white/20 border border-white/40 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 backdrop-blur-sm"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="px-5 py-3 rounded-xl bg-white/20 border border-white/40 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 backdrop-blur-sm"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="px-5 py-3 rounded-xl bg-white/20 border border-white/40 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 backdrop-blur-sm"
            required
          />

          <button
            type="submit"
            className="mt-3 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 hover:scale-105 rounded-full font-bold shadow-lg transition-transform duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-white/90">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-yellow-400 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
