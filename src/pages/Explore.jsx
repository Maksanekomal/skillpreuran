

const Explore = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Explore Business Ideas
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto leading-8">

            Discover beginner-friendly business opportunities based on
            your skills, interests, and entrepreneurial goals.

          </p>

        </div>

      </section>

      {/* SEARCH & FILTER SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <div className="grid md:grid-cols-3 gap-5">

            {/* Search */}
            <input
              type="text"
              placeholder="Search business ideas..."
              className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-blue-500"
            />

            {/* Category Filter */}
            <select className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-blue-500">

              <option>All Categories</option>
              <option>Tailoring</option>
              <option>Food Business</option>
              <option>Handicrafts</option>
              <option>Digital Skills</option>
              <option>Repair Services</option>

            </select>

            {/* Difficulty Filter */}
            <select className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-blue-500">

              <option>Difficulty Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>

            </select>

          </div>

        </div>

      </section>

      {/* BUSINESS IDEA CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">

            <div className="bg-blue-100 h-40 flex items-center justify-center text-6xl">
              👗
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold text-gray-800">
                Tailoring Business
              </h2>

              <p className="mt-4 text-gray-600 leading-7">

                Start a tailoring or boutique business offering
                custom clothing and fashion services.

              </p>

              {/* Tags */}
              <div className="flex gap-3 mt-5 flex-wrap">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Beginner
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Low Investment
                </span>

              </div>

              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">

                Learn More

              </button>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">

            <div className="bg-orange-100 h-40 flex items-center justify-center text-6xl">
              🍲
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold text-gray-800">
                Homemade Food Startup
              </h2>

              <p className="mt-4 text-gray-600 leading-7">

                Launch food delivery, catering, snacks,
                or cloud kitchen businesses from home.

              </p>

              <div className="flex gap-3 mt-5 flex-wrap">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Beginner
                </span>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Medium Investment
                </span>

              </div>

              <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition">

                Learn More

              </button>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">

            <div className="bg-purple-100 h-40 flex items-center justify-center text-6xl">
              💻
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold text-gray-800">
                Freelancing Services
              </h2>

              <p className="mt-4 text-gray-600 leading-7">

                Offer services like graphic design,
                web development, content writing, and more.

              </p>

              <div className="flex gap-3 mt-5 flex-wrap">

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  Intermediate
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Low Investment
                </span>

              </div>

              <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition">

                Learn More

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Explore;