

import { useState } from "react";

const Learning = () => {

  const [searchTerm, setSearchTerm] = useState("");

  // COMPLETED RESOURCES
  const [completedResources, setCompletedResources] = useState(
    JSON.parse(localStorage.getItem("completedResources")) || []
  );

  // MARK RESOURCE COMPLETE
  const markComplete = (title) => {

    if (!completedResources.includes(title)) {

      const updatedResources = [
        ...completedResources,
        title
      ];

      setCompletedResources(updatedResources);

      localStorage.setItem(
        "completedResources",
        JSON.stringify(updatedResources)
      );

      alert("Resource Completed ✅");
    }
  };

  const resources = [

    {
      title: "How To Start A Small Business",
      type: "Video",
      category: "Startup",
      level: "Beginner",
      description:
        "Learn the fundamentals of starting and managing a small business.",
      icon: "🎥",
      color: "bg-blue-50",
      link: "https://www.youtube.com",
    },

    {
      title: "Business Planning Basics",
      type: "Article",
      category: "Planning",
      level: "Beginner",
      description:
        "Understand how to create business plans, goals, and strategies.",
      icon: "📄",
      color: "bg-green-50",
      link: "https://www.google.com",
    },

    {
      title: "Marketing Checklist",
      type: "Checklist",
      category: "Marketing",
      level: "Intermediate",
      description:
        "A step-by-step checklist to market your startup effectively.",
      icon: "✅",
      color: "bg-yellow-50",
      link: "https://www.google.com",
    },

    {
      title: "Social Media Growth",
      type: "Video",
      category: "Marketing",
      level: "Intermediate",
      description:
        "Learn how to promote your business using Instagram and Facebook.",
      icon: "📱",
      color: "bg-pink-50",
      link: "https://www.youtube.com",
    },

    {
      title: "Budget & Cost Estimation",
      type: "Article",
      category: "Finance",
      level: "Beginner",
      description:
        "Understand pricing, budgeting, and startup cost calculations.",
      icon: "💰",
      color: "bg-purple-50",
      link: "https://www.google.com",
    },

    {
      title: "Customer Communication Guide",
      type: "Checklist",
      category: "Communication",
      level: "Advanced",
      description:
        "Improve customer trust and communication for your business.",
      icon: "🤝",
      color: "bg-orange-50",
      link: "https://www.google.com",
    },

  ];

  return (

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 transition duration-300">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
            Learning Hub
          </h1>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">

            Access learning resources, startup guidance,
            videos, articles, and business checklists
            designed for aspiring entrepreneurs.

          </p>

        </div>

        {/* SEARCH BAR */}
        <div className="mt-12">

          <input
            type="text"
            placeholder="Search learning resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 shadow-sm"
          />

        </div>

        {/* RESOURCE GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {
            resources
              .filter((resource) =>
                resource.title.toLowerCase().includes(
                  searchTerm.toLowerCase()
                )
              )
              .map((resource, index) => (

                <div
                  key={index}
                  className={`${resource.color} dark:bg-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300`}
                >

                  {/* ICON */}
                  <div className="text-5xl">
                    {resource.icon}
                  </div>

                  <div className="mt-6">

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-3">

                      <span className="text-sm font-medium bg-white dark:bg-gray-700 px-4 py-1 rounded-full text-gray-700 dark:text-white">
                        {resource.type}
                      </span>

                      <span className="text-sm font-medium bg-white dark:bg-gray-700 px-4 py-1 rounded-full text-gray-700 dark:text-white">
                        {resource.category}
                      </span>

                      <span className="text-sm font-medium bg-white dark:bg-gray-700 px-4 py-1 rounded-full text-gray-700 dark:text-white">
                        {resource.level}
                      </span>

                    </div>

                    {/* TITLE */}
                    <h2 className="mt-5 text-2xl font-bold text-gray-800 dark:text-white">
                      {resource.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                      {resource.description}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-6">

                      {/* VIEW RESOURCE */}
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noreferrer"
                      >

                        <button className="bg-white dark:bg-gray-700 px-5 py-2 rounded-xl text-blue-700 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition">

                          View Resource

                        </button>

                      </a>

                      {/* COMPLETE BUTTON */}
                      <button
                        onClick={() => markComplete(resource.title)}
                        className="bg-green-100 text-green-700 px-5 py-2 rounded-xl hover:bg-green-200 transition"
                      >

                        {
                          completedResources.includes(resource.title)
                            ? "Completed ✅"
                            : "Mark Complete"
                        }

                      </button>

                    </div>

                  </div>

                </div>

              ))
          }

        </div>

      </div>

    </div>
  );
};

export default Learning;