

import React from "react";
import { useNavigate } from "react-router-dom";

const MentorDashboard = () => {
  const navigate = useNavigate();

  const mentorBookings =
    JSON.parse(localStorage.getItem("mentorBookings")) || [];

    const completedResources =
JSON.parse(localStorage.getItem("completedResources")) || [];

  const totalSessions = mentorBookings.length;

  const totalStudents = new Set(
    mentorBookings.map((item) => item.email)
  ).size;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold dark:text-white">
              Mentor Dashboard 👨‍🏫
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Manage sessions, students and learning resources.
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
          >
            Student Dashboard
          </button>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h2 className="text-4xl font-bold text-blue-600">
              {totalSessions}
            </h2>

            <p className="mt-2 dark:text-gray-300">
              Total Sessions
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h2 className="text-4xl font-bold text-green-600">
              {totalStudents}
            </h2>

            <p className="mt-2 dark:text-gray-300">
              Total Students
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h2 className="text-4xl font-bold text-purple-600">
  3
</h2>

            <p className="mt-2 dark:text-gray-300">
              Resources Uploaded
            </p>
          </div>

        </div>

        {/* UPCOMING SESSIONS */}
        <div className="bg-white dark:bg-gray-800 mt-10 p-8 rounded-2xl shadow">

          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Upcoming Sessions 📅
          </h2>

          {mentorBookings.length === 0 ? (

            <p className="text-gray-500 dark:text-gray-400">
              No sessions booked yet.
            </p>

          ) : (

            <div className="space-y-5">

             {mentorBookings.map((booking, index) => (

  <div
    key={index}
    className="border dark:border-gray-700 p-5 rounded-2xl flex justify-between items-center"
  >

    <div>

      <h3 className="text-xl font-bold dark:text-white">
        {booking.name}
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        📧 {booking.email}
      </p>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        📅 {booking.date}
      </p>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        ⏰ {booking.time}
      </p>

      <p className="mt-2 text-blue-600">
        Mentor: {booking.mentor}
      </p>

      <div className="flex gap-3 mt-4">

        <button
          onClick={() =>
            navigate(`/session/${booking.mentor}`)
          }
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
        >
          Start Session
        </button>

        <button
          onClick={() =>
            alert(
              `Student: ${booking.name}\nEmail: ${booking.email}`
            )
          }
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-xl"
        >
          View Profile
        </button>

      </div>

    </div>

    <div>

      <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
        Upcoming
      </span>

    </div>

  </div>

))}


{/* LEARNING RESOURCES */}

<div className="bg-white dark:bg-gray-800 mt-10 p-8 rounded-2xl shadow">

  <h2 className="text-2xl font-bold mb-6 dark:text-white">
    Learning Resources 📚
  </h2>

  <div className="grid md:grid-cols-3 gap-5">

    <div className="border dark:border-gray-700 p-5 rounded-2xl">

      <h3 className="font-bold dark:text-white">
        Business Planning Guide
      </h3>

      <p className="text-gray-500 mt-2">
        PDF Resource
      </p>
<button
  onClick={() => {

    const completedResources =
      JSON.parse(
        localStorage.getItem("completedResources")
      ) || [];

    completedResources.push({
      name: "Business Planning Guide",
    });

    localStorage.setItem(
      "completedResources",
      JSON.stringify(completedResources)
    );

    window.open(
      "https://www.youtube.com/watch?v=nU-IIXBWlS4",
      "_blank"
    );

  }}
  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
>
  View
</button>

    </div>

    <div className="border dark:border-gray-700 p-5 rounded-2xl">

      <h3 className="font-bold dark:text-white">
        Marketing Basics
      </h3>

      <p className="text-gray-500 mt-2">
        Video Training
      </p>

      <button
  onClick={() => {

    const completedResources =
      JSON.parse(
        localStorage.getItem("completedResources")
      ) || [];

    completedResources.push({
      name: "Marketing Basics",
    });

    localStorage.setItem(
      "completedResources",
      JSON.stringify(completedResources)
    );

    window.open(
      "https://www.youtube.com/results?search_query=digital+marketing+course",
      "_blank"
    );

  }}
  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-xl"
>
  Watch
</button>

    </div>

    <div className="border dark:border-gray-700 p-5 rounded-2xl">

      <h3 className="font-bold dark:text-white">
        Startup Checklist
      </h3>

      <p className="text-gray-500 mt-2">
        Downloadable Checklist
      </p>

    <button
  onClick={() => {

    const completedResources =
      JSON.parse(
        localStorage.getItem("completedResources")
      ) || [];

    completedResources.push({
      name: "Startup Checklist",
    });

    localStorage.setItem(
      "completedResources",
      JSON.stringify(completedResources)
    );

    window.open(
      "https://www.score.org/resource/business-startup-checklist",
      "_blank"
    );

  }}
  className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-xl"
>
  Download
</button>

    </div>

  </div>

</div>
            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default MentorDashboard;