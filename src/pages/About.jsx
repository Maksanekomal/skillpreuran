
const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition duration-300">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">

            About <span className="text-blue-700 dark:text-blue-400">Skillpreuran</span>

          </h1>

          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-8">

            Skillpreuran is a platform designed to help individuals transform
            their practical skills into successful business opportunities.
            We guide beginners with business ideas, learning resources,
            mentorship, and structured roadmaps to confidently start
            and grow their entrepreneurial journey.

          </p>

        </div>

      </section>

      {/* MISSION SECTION */}
      <section className="py-24 bg-white dark:bg-gray-900 transition duration-300">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">

              Our Mission

            </h2>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">

              Our mission is to empower individuals by helping them discover
              business opportunities based on their existing talents and skills.

              We believe that anyone can become an entrepreneur with the
              right guidance, mentorship, and learning support.

            </p>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">

              Skillpreuran focuses on practical growth, skill-based learning,
              and step-by-step business guidance for beginners.

            </p>

          </div>

          {/* Right */}
          <div className="bg-blue-50 dark:bg-gray-800 p-10 rounded-3xl shadow-lg transition duration-300">

            <div className="space-y-6">

              <div className="bg-white dark:bg-gray-700 dark:text-white p-5 rounded-2xl shadow-sm">
                💡 Business Ideas & Recommendations
              </div>

              <div className="bg-white dark:bg-gray-700 dark:text-white p-5 rounded-2xl shadow-sm">
                📚 Learning Resources & Guidance
              </div>

              <div className="bg-white dark:bg-gray-700 dark:text-white p-5 rounded-2xl shadow-sm">
                👨‍🏫 Mentor Support & Networking
              </div>

              <div className="bg-white dark:bg-gray-700 dark:text-white p-5 rounded-2xl shadow-sm">
                🚀 Skill-Based Entrepreneurship
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition duration-300">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">

              Why Choose Skillpreuran?

            </h2>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">

              We provide everything needed to help beginners confidently
              start and grow their entrepreneurial journey.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

              <div className="text-5xl mb-5">
                🎯
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">

                Beginner Friendly

              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                Easy-to-understand guidance for individuals starting
                their entrepreneurial journey.

              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

              <div className="text-5xl mb-5">
                🛣
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">

                Structured Roadmaps

              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                Step-by-step learning and business development plans
                to help users stay focused.

              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

              <div className="text-5xl mb-5">
                🌍
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">

                Real Growth Opportunities

              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                Transform practical skills into sustainable income
                and long-term business opportunities.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;