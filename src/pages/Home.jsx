

import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (

    <div className="bg-white dark:bg-gray-900 transition duration-300">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">

              Transform Your Skills Into
              <span className="text-blue-700 dark:text-blue-400">
                {" "}Successful Businesses
              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">

              Skillpreuran helps individuals discover business opportunities,
              access step-by-step roadmaps, learn essential entrepreneurial skills,
              and connect with mentors to confidently start their journey.

            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-5">

              <button
                onClick={() => navigate("/explore")}
                className="bg-blue-600 text-white px-7 py-3 rounded-xl hover:bg-blue-700 transition"
              >

                Explore Ideas

              </button>

              <button
                onClick={() => navigate("/learning")}
                className="border border-blue-600 text-blue-700 dark:text-blue-400 px-7 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition"
              >

                Learn More

              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl w-full max-w-md">

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Start Your Journey
              </h2>

              <div className="space-y-4">

                <div className="bg-blue-50 dark:bg-gray-700 dark:text-white p-4 rounded-xl">
                  🎨 Tailoring Business
                </div>

                <div className="bg-indigo-50 dark:bg-gray-700 dark:text-white p-4 rounded-xl">
                  🍲 Homemade Food Startup
                </div>

                <div className="bg-purple-50 dark:bg-gray-700 dark:text-white p-4 rounded-xl">
                  💻 Freelancing Services
                </div>

                <div className="bg-pink-50 dark:bg-gray-700 dark:text-white p-4 rounded-xl">
                  🛠 Repair & Technical Services
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-white dark:bg-gray-900">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Everything You Need To Start Your Business
            </h2>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">

              Skillpreuran provides guidance, resources, and mentorship
              to help individuals confidently transform their skills into
              sustainable businesses.

            </p>

          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {/* Card 1 */}
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">

              <div className="text-5xl mb-5">
                💡
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Business Recommendations
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                Discover business opportunities based on your practical skills,
                interests, and entrepreneurial goals.

              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-indigo-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">

              <div className="text-5xl mb-5">
                🛣
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Step-by-Step Roadmaps
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                Learn exactly how to start, manage, market, and grow
                your business with structured guidance.

              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-purple-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">

              <div className="text-5xl mb-5">
                📚
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Learning Resources
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                Access videos, articles, and checklists designed to help
                beginners build business confidence.

              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-pink-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">

              <div className="text-5xl mb-5">
                👨‍🏫
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Mentor Guidance
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                Connect with experienced mentors who can guide and support
                your entrepreneurial journey.

              </p>

            </div>

            {/* Card 5 */}
            <div className="bg-yellow-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">

              <div className="text-5xl mb-5">
                📈
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Progress Tracking
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                Track your learning journey, completed roadmaps,
                and business development progress.

              </p>

            </div>

            {/* Card 6 */}
            <div className="bg-green-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition">

              <div className="text-5xl mb-5">
                🚀
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Skill-Based Growth
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                Empower your existing skills and transform them into
                profitable and sustainable business opportunities.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              How Skillpreuran Works
            </h2>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">

              Follow a simple step-by-step journey designed to help
              beginners confidently transform their skills into businesses.

            </p>

          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-10 mt-20">

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md text-center">

              <div className="w-16 h-16 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full mx-auto text-2xl font-bold">
                1
              </div>

              <h3 className="text-2xl font-semibold mt-6 dark:text-white">
                Select Your Skills
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                Choose your practical skills and entrepreneurial interests.
              </p>

            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md text-center">

              <div className="w-16 h-16 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-full mx-auto text-2xl font-bold">
                2
              </div>

              <h3 className="text-2xl font-semibold mt-6 dark:text-white">
                Discover Business Ideas
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                Explore business opportunities recommended according to your skills.
              </p>

            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md text-center">

              <div className="w-16 h-16 bg-purple-100 text-purple-700 flex items-center justify-center rounded-full mx-auto text-2xl font-bold">
                3
              </div>

              <h3 className="text-2xl font-semibold mt-6 dark:text-white">
                Follow Roadmaps
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                Access structured guidance covering setup, tools, and marketing.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* BUSINESS CATEGORIES SECTION */}
      <section className="py-24 bg-white dark:bg-gray-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Explore Business Categories
            </h2>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">

              Discover business opportunities across multiple industries
              based on your practical skills and interests.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              {
                icon: "👗",
                title: "Tailoring & Fashion",
                desc: "Start tailoring services, boutique businesses, fashion design, and custom clothing ventures.",
                color: "bg-blue-50",
              },
              {
                icon: "🍲",
                title: "Food & Catering",
                desc: "Explore homemade food businesses, catering, snack services, and cloud kitchen ideas.",
                color: "bg-orange-50",
              },
              {
                icon: "🎨",
                title: "Handicrafts",
                desc: "Build creative businesses around handmade products, art, crafts, and customized gift items.",
                color: "bg-purple-50",
              },
              {
                icon: "🛠",
                title: "Repair Services",
                desc: "Start repair and maintenance services for electronics, appliances, mobile devices, and equipment.",
                color: "bg-green-50",
              },
              {
                icon: "💻",
                title: "Freelancing & Digital Skills",
                desc: "Offer services like graphic design, web development, content writing, and social media management.",
                color: "bg-indigo-50",
              },
              {
                icon: "💄",
                title: "Beauty & Wellness",
                desc: "Explore salon services, makeup artistry, skincare guidance, and wellness coaching.",
                color: "bg-pink-50",
              },
            ].map((item, index) => (

              <div
                key={index}
                className={`${item.color} dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition`}
              >

                <div className="text-5xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MENTOR SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Learn From Experienced Mentors
            </h2>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">

              Connect with industry experts and mentors who can guide you
              through every stage of your entrepreneurial journey.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              {
                icon: "👨‍🏫",
                name: "Rajesh Sharma",
                role: "Business Strategy Mentor",
                desc: "Helps beginners build sustainable business models, validate ideas, and improve business planning.",
                bg: "bg-blue-100",
                color: "text-blue-600",
              },
              {
                icon: "👩‍💼",
                name: "Priya Mehta",
                role: "Marketing & Branding Expert",
                desc: "Guides entrepreneurs on branding, social media marketing, customer engagement, and online growth strategies.",
                bg: "bg-pink-100",
                color: "text-pink-600",
              },
              {
                icon: "👨‍💻",
                name: "Arjun Verma",
                role: "Digital Skills Trainer",
                desc: "Supports learners in freelancing, digital services, web tools, and building online income opportunities.",
                bg: "bg-green-100",
                color: "text-green-600",
              },
            ].map((mentor, index) => (

              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
              >

                <div className={`w-24 h-24 ${mentor.bg} rounded-full flex items-center justify-center text-4xl mx-auto`}>
                  {mentor.icon}
                </div>

                <h3 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-white">
                  {mentor.name}
                </h3>

                <p className={`${mentor.color} mt-2 font-medium`}>
                  {mentor.role}
                </p>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                  {mentor.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">

            Start Building Your Business Journey Today

          </h2>

          <p className="mt-6 text-lg text-blue-100 leading-8 max-w-3xl mx-auto">

            Discover business opportunities, access expert guidance,
            learn entrepreneurial skills, and transform your practical
            talents into sustainable income sources.

          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <button
              onClick={() => navigate("/register")}
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >

              Get Started

            </button>

            <button
              onClick={() => navigate("/explore")}
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
            >

              Explore Business Ideas

            </button>

          </div>

        </div>

      </section>

    </div>

  );
};

export default Home;