


import React from "react";
<button
  onClick={() => navigate("/mentor-dashboard")}
  className="bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700"
>
  Open Mentor Dashboard 👨‍🏫
</button>

const MentorDashboard = () => {
  const mentorBookings =
    JSON.parse(localStorage.getItem("mentorBookings")) || [];

  const totalSessions = mentorBookings.length;

  const totalStudents = new Set(
    mentorBookings.map((item) => item.email)
  ).size;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          Mentor Dashboard 👨‍🏫
        </h1>

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">

            <h2 className="text-3xl font-bold text-blue-600">
              {totalSessions}
            </h2>

            <p className="mt-2 dark:text-gray-300">
              Total Sessions
            </p>

          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">

            <h2 className="text-3xl font-bold text-green-600">
              {totalStudents}
            </h2>

            <p className="mt-2 dark:text-gray-300">
              Total Students
            </p>

          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">

            <h2 className="text-3xl font-bold text-purple-600">
              0
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
            <p className="text-gray-500">
              No sessions booked.
            </p>
          ) : (
            <div className="space-y-4">

              {mentorBookings.map((booking, index) => (

                <div
                  key={index}
                  className="border dark:border-gray-700 p-4 rounded-xl"
                >

                  <h3 className="font-bold text-lg dark:text-white">
                    {booking.name}
                  </h3>

                  <p className="dark:text-gray-300">
                    📧 {booking.email}
                  </p>

                  <p className="dark:text-gray-300">
                    📅 {booking.date}
                  </p>

                  <p className="dark:text-gray-300">
                    ⏰ {booking.time}
                  </p>

                  <p className="text-blue-600 mt-2">
                    Mentor: {booking.mentor}
                  </p>

                </div>

              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default MentorDashboard;