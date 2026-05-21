

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  // GET SAVED IDEAS
  const savedIdeas =
    JSON.parse(localStorage.getItem("savedIdeas")) || [];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="bg-white rounded-3xl shadow-md p-10">

          <h1 className="text-4xl font-bold text-gray-800">
            Welcome, {user?.name} 👋
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Continue your entrepreneurial journey with Skillpreuran.
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-8 mt-10">

          {/* SAVED IDEAS */}
          <div className="bg-blue-50 p-8 rounded-2xl">

            <h2 className="text-4xl font-bold text-blue-700">
              {savedIdeas.length}
            </h2>

            <p className="mt-3 text-gray-600">
              Saved Business Ideas
            </p>

          </div>

          {/* ROADMAPS */}
          <div className="bg-green-50 p-8 rounded-2xl">

            <h2 className="text-4xl font-bold text-green-700">
              2
            </h2>

            <p className="mt-3 text-gray-600">
              Roadmaps In Progress
            </p>

          </div>

          {/* LEARNING */}
          <div className="bg-purple-50 p-8 rounded-2xl">

            <h2 className="text-4xl font-bold text-purple-700">
              5
            </h2>

            <p className="mt-3 text-gray-600">
              Resources Completed
            </p>

          </div>

          {/* MENTORS */}
          <div className="bg-orange-50 p-8 rounded-2xl">

            <h2 className="text-4xl font-bold text-orange-700">
              1
            </h2>

            <p className="mt-3 text-gray-600">
              Mentors Connected
            </p>

          </div>

        </div>

        {/* PROGRESS SECTION */}
        <div className="bg-white rounded-3xl shadow-md p-10 mt-12">

          <h2 className="text-3xl font-bold text-gray-800">
            Your Progress 📈
          </h2>

          <div className="mt-8 space-y-8">

            {/* BUSINESS LEARNING */}
            <div>

              <div className="flex justify-between mb-2">

                <p className="font-medium text-gray-700">
                  Entrepreneurial Learning
                </p>

                <p className="text-blue-700 font-semibold">
                  70%
                </p>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div className="bg-blue-600 h-4 rounded-full w-[70%]"></div>

              </div>

            </div>

            {/* ROADMAP */}
            <div>

              <div className="flex justify-between mb-2">

                <p className="font-medium text-gray-700">
                  Business Roadmap Completion
                </p>

                <p className="text-green-700 font-semibold">
                  45%
                </p>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div className="bg-green-600 h-4 rounded-full w-[45%]"></div>

              </div>

            </div>

            {/* SKILLS */}
            <div>

              <div className="flex justify-between mb-2">

                <p className="font-medium text-gray-700">
                  Skill Development
                </p>

                <p className="text-purple-700 font-semibold">
                  80%
                </p>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div className="bg-purple-600 h-4 rounded-full w-[80%]"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;