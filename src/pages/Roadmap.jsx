

import { useLocation } from "react-router-dom";

const Roadmap = () => {

  const location = useLocation();

  const idea = location.state?.idea || "Business";

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

                  </div>

                </div>

              </div>

            </div>

            {/* LEARNING RESOURCES */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">

              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Learning Resources
              </h2>

              <div className="mt-8 space-y-5">

                <div className="border border-gray-200 dark:border-gray-700 p-5 rounded-xl dark:text-white">
                  🎥 Beginner Business Video Course
                </div>

                <div className="border border-gray-200 dark:border-gray-700 p-5 rounded-xl dark:text-white">
                  📄 Startup Checklist
                </div>

                <div className="border border-gray-200 dark:border-gray-700 p-5 rounded-xl dark:text-white">
                  📘 Marketing & Branding Guide
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

            {/* SKILLS REQUIRED */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Skills Required
              </h2>

              <div className="flex flex-wrap gap-3 mt-6">

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  Communication
                </span>

                <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
                  Creativity
                </span>

                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  Marketing
                </span>

                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
                  Business Planning
                </span>

              </div>

            </div>

            {/* MENTOR SUPPORT */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Mentor Support
              </h2>

              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-7">

                Connect with experienced mentors for business guidance,
                pricing strategies, and marketing support.

              </p>

              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">

                Connect Mentor

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Roadmap;