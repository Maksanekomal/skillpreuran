
import { useEffect, useState } from "react";


const SavedIdeas = () => {

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

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-800">
            Saved Business Ideas
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">

            View and manage your saved entrepreneurial ideas
            to continue building your future business.

          </p>

        </div>

        {/* EMPTY STATE */}
        {
          savedIdeas.length === 0 && (

            <div className="bg-white rounded-3xl shadow-md p-12 mt-16 text-center">

              <h2 className="text-3xl font-bold text-gray-700">
                No Saved Ideas Yet
              </h2>

              <p className="mt-4 text-gray-500">
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
                    className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
                  >

                    <div className="text-5xl">
                      🚀
                    </div>

                    <h2 className="mt-6 text-2xl font-bold text-blue-700">
                      {idea}
                    </h2>

                    <p className="mt-4 text-gray-600 leading-7">

                      Continue developing this business idea
                      and explore roadmap guidance.

                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-6">

                      <button className="bg-blue-100 text-blue-700 px-5 py-2 rounded-lg hover:bg-blue-200 transition">

                        Explore

                      </button>

                      <button
                        onClick={() => removeIdea(idea)}
                        className="bg-red-100 text-red-700 px-5 py-2 rounded-lg hover:bg-red-200 transition"
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