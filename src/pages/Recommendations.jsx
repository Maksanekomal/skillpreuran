
import React, { useEffect, useState } from "react";
import axios from "axios";

const Recommendations = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5000/api/business-ideas/recommendations",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setIdeas(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-black p-10 transition-colors duration-300">

      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-10 text-center">
        Recommended Business Ideas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {ideas.map((idea) => (
          <div
            key={idea._id}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
          >

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
              {idea.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {idea.description}
            </p>

            <div className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {idea.category}
            </div>

            <div className="space-y-2 text-gray-700 dark:text-gray-300">

              <p>
                <strong>Estimated Cost:</strong> ₹{idea.estimatedCost}
              </p>

              <p>
                <strong>Difficulty:</strong> {idea.difficulty}
              </p>

            </div>

            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition duration-300">
              View Roadmap
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Recommendations;