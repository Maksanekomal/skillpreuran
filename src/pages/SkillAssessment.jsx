
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SkillAssessment = () => {

  const navigate = useNavigate();

  const [selectedSkill, setSelectedSkill] = useState("");

  const [businessIdeas, setBusinessIdeas] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  // SAVE IDEA
  const saveIdea = (idea) => {

    const existingIdeas =
      JSON.parse(localStorage.getItem("savedIdeas")) || [];

    const updatedIdeas = [...existingIdeas, idea];

    localStorage.setItem(
      "savedIdeas",
      JSON.stringify(updatedIdeas)
    );

    alert("Idea Saved Successfully 🚀");
  };

  // BUSINESS MAPPING
  const skillIdeas = {

    Cooking: [
      "Homemade Food Business",
      "Cloud Kitchen Startup",
      "Snack & Catering Services",
    ],

    Tailoring: [
      "Boutique Business",
      "Custom Dress Stitching",
      "Fashion Alteration Services",
    ],

    "Digital Skills": [
      "Freelancing Agency",
      "Social Media Management",
      "Graphic Design Services",
    ],

    Repairing: [
      "Mobile Repair Shop",
      "Home Appliance Repair",
      "Technical Support Services",
    ],

    Handicrafts: [
      "Handmade Products Store",
      "Gift Business",
      "Online Craft Selling",
    ],
  };

  // HANDLE RECOMMENDATION
  const handleRecommendation = () => {

    setBusinessIdeas(
      skillIdeas[selectedSkill] || []
    );
  };

  return (

    <div className="min-h-screen bg-gray-50 py-16 px-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-800">
            Skill Assessment
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">

            Select your skills and discover business opportunities
            that match your strengths and interests.

          </p>

        </div>

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-md p-10 mt-14">

          <label className="block text-xl font-semibold text-gray-700 mb-4">
            Select Your Skill
          </label>

          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
          >

            <option value="">
              -- Choose Skill --
            </option>

            <option value="Cooking">
              Cooking
            </option>

            <option value="Tailoring">
              Tailoring
            </option>

            <option value="Digital Skills">
              Digital Skills
            </option>

            <option value="Repairing">
              Repairing
            </option>

            <option value="Handicrafts">
              Handicrafts
            </option>

          </select>

          {/* BUTTON */}
          <button
            onClick={handleRecommendation}
            className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
          >

            Get Business Ideas

          </button>

        </div>

        {/* SEARCH BAR */}
        {
          businessIdeas.length > 0 && (

            <div className="mt-10">

              <input
                type="text"
                placeholder="Search business ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-500 shadow-sm"
              />

            </div>

          )
        }

        {/* RESULTS */}
        {
          businessIdeas.length > 0 && (

            <div className="mt-14">

              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Recommended Business Ideas 🚀
              </h2>

              <div className="grid md:grid-cols-3 gap-8">

                {
                  businessIdeas
                    .filter((idea) =>
                      idea.toLowerCase().includes(
                        searchTerm.toLowerCase()
                      )
                    )
                    .map((idea, index) => (

                      <div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                      >

                        <h3 className="text-2xl font-semibold text-blue-700">
                          {idea}
                        </h3>

                        <p className="mt-4 text-gray-600 leading-7">

                          Start building your entrepreneurial journey
                          with this business opportunity.

                        </p>

                        {/* BUTTONS */}
                        <div className="flex gap-4 mt-6">

                          {/* ROADMAP BUTTON */}
                          <button
                           onClick={() =>
                               navigate("/roadmap", {
                                  state: { idea }
                                   })
                                  }
                            className="bg-blue-100 text-blue-700 px-5 py-2 rounded-lg hover:bg-blue-200 transition"
                          >

                            Explore Roadmap

                          </button>

                          {/* SAVE BUTTON */}
                          <button
                            onClick={() => saveIdea(idea)}
                            className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-lg hover:bg-yellow-200 transition"
                          >

                            Save Idea

                          </button>

                        </div>

                      </div>

                    ))
                }

              </div>

            </div>

          )
        }

      </div>

    </div>

  );
};

export default SkillAssessment;