

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // HANDLE INPUTS
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "https://skillpreneur-backend.onrender.com/api/auth/login",
        formData
      );

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        response.data.token
      );

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      setMessage("Login Successful 🚀");

      console.log(response.data);

      // REDIRECT
      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {

      setMessage(
        error.response?.data?.message || "Login Failed"
      );

    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-6 py-20 transition duration-300">

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-indigo-700 to-blue-600 text-white p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold leading-tight">

            Welcome Back

          </h1>

          <p className="mt-6 text-lg leading-8 text-indigo-100">

            Continue your entrepreneurial journey with Skillpreuran
            and access business roadmaps, mentorship,
            and startup learning resources.

          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              🚀 Explore Business Opportunities
            </div>

            <div className="flex items-center gap-4">
              📚 Access Learning Content
            </div>

            <div className="flex items-center gap-4">
              👨‍🏫 Connect With Mentors
            </div>

            <div className="flex items-center gap-4">
              📈 Track Your Progress
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 md:p-14 bg-white dark:bg-gray-900">

          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Login
          </h2>

          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Login to continue building your business journey.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* EMAIL */}
            <div>

              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl px-5 py-3 outline-none focus:border-blue-500"
                required
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl px-5 py-3 outline-none focus:border-blue-500"
                required
              />

            </div>

            {/* MESSAGE */}
            {
              message && (
                <p className="text-center text-blue-600 dark:text-blue-400 font-medium">
                  {message}
                </p>
              )
            }

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-semibold"
            >

              Login

            </button>

          </form>

          {/* LINKS */}
          <div className="mt-6 flex justify-between text-sm">

            <Link
              to="/forgot-password"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>

            <Link
              to="/register"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Create Account
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;