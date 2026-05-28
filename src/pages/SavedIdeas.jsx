
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SavedIdeas = () => {

  const navigate = useNavigate();

  const [savedIdeas, setSavedIdeas] = useState([]);

  // LOAD SAVED IDEAS
  useEffect(() => {

    const ideas =
      JSON.parse(localStorage.getItem("savedIdeas")) || [];

    setSavedIdeas(ideas);

  }, []);

  // REMOVE IDEA
  const removeIdea = (ideaToRemove) => {

    const updatedIdeas = savedIdeas.filter(
      (idea) => idea !== ideaToRemove
    );

    setSavedIdeas(updatedIdeas);

    localStorage.setItem(
      "savedIdeas",
      JSON.stringify(updatedIdeas)
    );
  };

  // CLEAR ALL IDEAS
  const clearAllIdeas = () => {

    localStorage.removeItem("savedIdeas");

    setSavedIdeas([]);

  };

  return (

    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-6 transition duration-300">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
            Saved Business Ideas
          </h1>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">

            View and manage your saved entrepreneurial ideas
            to continue building your future business.

          </p>

        </div>

        {/* CLEAR BUTTON */}
        {
          savedIdeas.length > 0 && (

            <div className="flex justify-end mt-10">

              <button
                onClick={clearAllIdeas}
                className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition"
              >

                Clear All

              </button>

            </div>

          )
        }

        {/* EMPTY STATE */}
        {
          savedIdeas.length === 0 && (

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-md p-12 mt-16 text-center">

              <div className="text-6xl">
                📂
              </div>

              <h2 className="text-3xl font-bold text-gray-700 dark:text-white mt-6">
                No Saved Ideas Yet
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-300">

                Start exploring business opportunities
                and save ideas for later.

              </p>

            </div>

          )
        }

        {/* IDEAS GRID */}
        {
          savedIdeas.length > 0 && (

            <div className="grid md:grid-cols-3 gap-8 mt-16">

              {
                savedIdeas.map((idea, index) => (

                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-3xl shadow-md hover:shadow-xl transition"
                  >

                    <div className="text-5xl">
                      🚀
                    </div>

                    <h2 className="mt-6 text-2xl font-bold text-blue-700 dark:text-blue-400">
                      {idea}
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                      Continue developing this business idea
                      and explore roadmap guidance.

                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-6 flex-wrap">

                      <button
                        onClick={() =>
                          navigate("/roadmap", {
                            state: { idea }
                          })
                        }
                        className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-5 py-2 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                      >

                        Explore

                      </button>

                      <button
                        onClick={() => removeIdea(idea)}
                        className="bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 px-5 py-2 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition"
                      >

                        Remove

                      </button>

                    </div>

                  </div>

                ))
              }

            </div>

          )
        }

      </div>

    </div>
  );
};

export default SavedIdeas;