import { useState } from "react";

import { useParams } from "react-router-dom";
const Roadmap = () => {

  const { businessType } = useParams();

const idea =
  businessType.charAt(0).toUpperCase() +
  businessType.slice(1);
  // PROGRESS TRACKING
  const [completedSteps, setCompletedSteps] = useState(() => {

    return JSON.parse(
      localStorage.getItem("completedSteps")
    ) || [];

  });

  const totalSteps = 4;

  const handleComplete = (step) => {

    if (!completedSteps.includes(step)) {

      const updatedSteps = [
        ...completedSteps,
        step
      ];

      setCompletedSteps(updatedSteps);

      // SAVE TO LOCAL STORAGE
      localStorage.setItem(
        "completedSteps",
        JSON.stringify(updatedSteps)
      );

    }

  };

  const progressPercentage =
    (completedSteps.length / totalSteps) * 100;

  return (

    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition duration-300">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            {idea} Roadmap
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl leading-8">

            Learn how to build and grow your
            {" "} {idea} {" "}
            with structured step-by-step guidance.

          </p>

        </div>

      </section>

      {/* PROGRESS TRACKER */}
      <div className="max-w-7xl mx-auto px-6 pt-10">

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Your Progress
            </h2>

            <p className="text-lg font-semibold text-blue-600">
              {Math.round(progressPercentage)}%
            </p>

          </div>

          {/* PROGRESS BAR */}
          <div className="w-full bg-gray-200 rounded-full h-4 mt-6">

            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>

          </div>

          <p className="mt-4 text-gray-600 dark:text-gray-300">

            Completed {completedSteps.length} out of {totalSteps} steps

          </p>

        </div>

      </div>

      {/* OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-8">

            {/* BUSINESS OVERVIEW */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">

              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Business Overview
              </h2>

              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">

                This roadmap helps aspiring entrepreneurs understand the
                essential steps required to successfully launch and grow
                their business idea with proper planning and execution.

              </p>

            </div>

            {/* STEP BY STEP ROADMAP */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">

              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Step-by-Step Roadmap
              </h2>

              <div className="mt-10 space-y-8">

                {/* STEP 1 */}
                <div className="flex gap-5">

                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Validate Your Business Idea
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-7">

                      Research market demand, identify target customers,
                      and understand competitors in your business area.

                    </p>

                    <button
                      onClick={() => handleComplete(1)}
                      className="mt-4 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
                    >

                      {
                        completedSteps.includes(1)
                          ? "Completed ✅"
                          : "Mark Complete"
                      }

                    </button>

                  </div>

                </div>

                {/* STEP 2 */}
                <div className="flex gap-5">

                  <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Arrange Tools & Resources
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-7">

                      Gather essential tools, software, workspace,
                      and learning resources required for your business.

                    </p>

                    <button
                      onClick={() => handleComplete(2)}
                      className="mt-4 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200 transition"
                    >

                      {
                        completedSteps.includes(2)
                          ? "Completed ✅"
                          : "Mark Complete"
                      }

                    </button>

                  </div>

                </div>

                {/* STEP 3 */}
                <div className="flex gap-5">

                  <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Register & Setup Business
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-7">

                      Create branding, setup pricing, complete legal registration,
                      and prepare your business operations.

                    </p>

                    <button
                      onClick={() => handleComplete(3)}
                      className="mt-4 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition"
                    >

                      {
                        completedSteps.includes(3)
                          ? "Completed ✅"
                          : "Mark Complete"
                      }

                    </button>

                  </div>

                </div>

                {/* STEP 4 */}
                <div className="flex gap-5">

                  <div className="w-12 h-12 bg-pink-100 text-pink-700 rounded-full flex items-center justify-center font-bold">
                    4
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Marketing & Customer Growth
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-7">

                      Promote your services using social media,
                      referrals, digital marketing, and customer engagement.

                    </p>

                    <button
                      onClick={() => handleComplete(4)}
                      className="mt-4 bg-pink-100 text-pink-700 px-4 py-2 rounded-lg hover:bg-pink-200 transition"
                    >

                      {
                        completedSteps.includes(4)
                          ? "Completed ✅"
                          : "Mark Complete"
                      }

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">

            {/* QUICK INFO */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Quick Info
              </h2>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-gray-500 dark:text-gray-300">
                    Difficulty
                  </p>

                  <h3 className="font-semibold text-lg dark:text-white">
                    Beginner Friendly
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 dark:text-gray-300">
                    Investment Level
                  </p>

                  <h3 className="font-semibold text-lg dark:text-white">
                    Low to Medium
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 dark:text-gray-300">
                    Estimated Startup Cost
                  </p>

                  <h3 className="font-semibold text-lg dark:text-white">
                    ₹15,000 - ₹50,000
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Roadmap;