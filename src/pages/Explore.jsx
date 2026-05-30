

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Explore = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [difficulty, setDifficulty] = useState("Difficulty Level");

  const businessIdeas = [
    {
      title: "Tailoring Business",
      category: "Tailoring",
      difficulty: "Beginner",
      investment: "Low Investment",
      icon: "👗",
      bg: "bg-blue-100 dark:bg-blue-900",
      roadmap: "/roadmap/tailoring",
      description:
        "Start a tailoring or boutique business offering custom clothing and fashion services.",
    },
    {
      title: "Homemade Food Startup",
      category: "Food Business",
      difficulty: "Beginner",
      investment: "Medium Investment",
      icon: "🍲",
      bg: "bg-orange-100 dark:bg-orange-900",
      roadmap: "/roadmap/food",
      description:
        "Launch food delivery, catering, snacks, or cloud kitchen businesses from home.",
    },
    {
      title: "Freelancing Services",
      category: "Digital Skills",
      difficulty: "Intermediate",
      investment: "Low Investment",
      icon: "💻",
      bg: "bg-purple-100 dark:bg-purple-900",
      roadmap: "/roadmap/freelancing",
      description:
        "Offer services like graphic design, web development, content writing, and more.",
    },
    {
      title: "Mobile Repair Shop",
      category: "Repair Services",
      difficulty: "Beginner",
      investment: "Low Investment",
      icon: "🛠️",
      bg: "bg-green-100 dark:bg-green-900",
      roadmap: "/roadmap/repairing",
      description:
        "Provide repair services for smartphones, laptops, and electronic devices.",
    },
    {
      title: "Handmade Craft Store",
      category: "Handicrafts",
      difficulty: "Beginner",
      investment: "Low Investment",
      icon: "🎨",
      bg: "bg-pink-100 dark:bg-pink-900",
      roadmap: "/roadmap/handicrafts",
      description:
        "Sell handmade gifts, decorative items, and customized products online.",
    },
  ];

  const filteredIdeas = businessIdeas.filter((idea) => {
    const matchesSearch = idea.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All Categories" ||
      idea.category === category;

    const matchesDifficulty =
      difficulty === "Difficulty Level" ||
      idea.difficulty === difficulty;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDifficulty
    );
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition duration-300">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-900 dark:to-gray-800 text-white py-20">

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

      {/* SEARCH SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">

          <div className="grid md:grid-cols-3 gap-5">

            <input
              type="text"
              placeholder="Search business ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl px-5 py-3 outline-none focus:border-blue-500"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl px-5 py-3 outline-none focus:border-blue-500"
            >
              <option>All Categories</option>
              <option>Tailoring</option>
              <option>Food Business</option>
              <option>Handicrafts</option>
              <option>Digital Skills</option>
              <option>Repair Services</option>
            </select>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl px-5 py-3 outline-none focus:border-blue-500"
            >
              <option>Difficulty Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

          </div>

        </div>

      </section>

      {/* BUSINESS CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          {filteredIdeas.map((idea, index) => (

            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div
                className={`${idea.bg} h-40 flex items-center justify-center text-6xl`}
              >
                {idea.icon}
              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {idea.title}
                </h2>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                  {idea.description}
                </p>

                <div className="flex gap-3 mt-5 flex-wrap">

                  <button
  onClick={() => setDifficulty(idea.difficulty)}
  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200"
>
  {idea.difficulty}
</button>

                  <button
  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200"
>
  {idea.investment}
</button>

                </div>

                <button
                  onClick={() => navigate(idea.roadmap)}
                  className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  Learn More
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Explore;