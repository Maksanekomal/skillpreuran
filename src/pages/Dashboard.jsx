

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  // GET SAVED IDEAS
  const savedIdeas =
    JSON.parse(localStorage.getItem("savedIdeas")) || [];

  // GET CONNECTED MENTORS
  const connectedMentors =
    JSON.parse(localStorage.getItem("connectedMentors")) || [];

  // GET COMPLETED ROADMAP STEPS
  const completedSteps =
    JSON.parse(localStorage.getItem("completedSteps")) || [];

  const totalSteps = 4;

  const roadmapProgress =
    Math.round((completedSteps.length / totalSteps) * 100);

  return (

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-16 transition duration-300">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-md p-10">

          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Welcome, {user?.name} 👋
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Continue your entrepreneurial journey with Skillpreuran.
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-8 mt-10">

          {/* SAVED IDEAS */}
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl">

            <h2 className="text-4xl font-bold text-blue-700">
              {savedIdeas.length}
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Saved Business Ideas
            </p>

          </div>

          {/* ROADMAPS */}
          <div className="bg-green-50 dark:bg-gray-800 p-8 rounded-2xl">

            <h2 className="text-4xl font-bold text-green-700">
              {completedSteps.length}
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Roadmaps In Progress
            </p>

          </div>

          {/* LEARNING */}
          <div className="bg-purple-50 dark:bg-gray-800 p-8 rounded-2xl">

            <h2 className="text-4xl font-bold text-purple-700">
              5
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Resources Completed
            </p>

          </div>

          {/* MENTORS */}
          <div className="bg-orange-50 dark:bg-gray-800 p-8 rounded-2xl">

            <h2 className="text-4xl font-bold text-orange-700">
              {connectedMentors.length}
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Mentors Connected
            </p>

          </div>

        </div>

        {/* PROGRESS SECTION */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-md p-10 mt-12">

          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Your Progress 📈
          </h2>

          <div className="mt-8 space-y-8">

            {/* BUSINESS LEARNING */}
            <div>

              <div className="flex justify-between mb-2">

                <p className="font-medium text-gray-700 dark:text-gray-300">
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

                <p className="font-medium text-gray-700 dark:text-gray-300">
                  Business Roadmap Completion
                </p>

                <p className="text-green-700 font-semibold">
                  {roadmapProgress}%
                </p>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="bg-green-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${roadmapProgress}%` }}
                ></div>

              </div>

            </div>

            {/* SKILLS */}
            <div>

              <div className="flex justify-between mb-2">

                <p className="font-medium text-gray-700 dark:text-gray-300">
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

        {/* CONNECTED MENTORS */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-md p-10 mt-12">

          <div className="flex items-center justify-between">

            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Connected Mentors 🤝
            </h2>

            <p className="text-blue-700 font-semibold">
              {connectedMentors.length} Connected
            </p>

          </div>

          {
            connectedMentors.length === 0 ? (

              <p className="mt-6 text-gray-500 dark:text-gray-300">
                No mentors connected yet.
              </p>

            ) : (

              <div className="grid md:grid-cols-3 gap-6 mt-8">

                {
                  connectedMentors.map((mentor, index) => (

                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl"
                    >

                      <div className="text-5xl">
                        {mentor.image}
                      </div>

                      <h3 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
                        {mentor.name}
                      </h3>

                      <p className="mt-2 text-blue-700 font-medium">
                        {mentor.expertise}
                      </p>

                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {mentor.experience}
                      </p>

                      <span className="inline-block mt-4 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
                        {mentor.category}
                      </span>

                    </div>

                  ))
                }

              </div>

            )
          }

        </div>

      </div>

    </div>
  );
};

export default Dashboard;