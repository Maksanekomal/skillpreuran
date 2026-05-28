

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [message, setMessage] = useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE REGISTER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      console.log(response.data);

      setMessage("Registration Successful 🚀");

      // Redirect after success
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {

      setMessage(
        error.response?.data?.message || "Something went wrong"
      );

    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-6 py-20 transition duration-300">

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-600 text-white p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold leading-tight">

            Join Skillpreuran Today

          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">

            Transform your practical skills into successful businesses
            with expert guidance, structured roadmaps,
            and mentorship support.

          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              🚀 Business Growth Guidance
            </div>

            <div className="flex items-center gap-4">
              📚 Access Entrepreneurial Resources
            </div>

            <div className="flex items-center gap-4">
              👨‍🏫 Connect With Mentors
            </div>

            <div className="flex items-center gap-4">
              📈 Track Learning Progress
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 md:p-14 bg-white dark:bg-gray-900">

          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Register
          </h2>

          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Create your account and begin your entrepreneurial journey.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* NAME */}
            <div>

              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl px-5 py-3 outline-none focus:border-blue-500"
                required
              />

            </div>

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

            {/* ROLE */}
            <div>

              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                Select Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl px-5 py-3 outline-none focus:border-blue-500"
              >
                <option value="user">User</option>
                <option value="mentor">Mentor</option>
              </select>

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

              Register

            </button>

          </form>

          {/* LOGIN LINK */}
          <p className="mt-8 text-center text-gray-600 dark:text-gray-300">

            Already have an account?

            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-400 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;