
import { useState, useEffect } from "react";

const Mentors = () => {
  const [connectedMentors, setConnectedMentors] = useState([]);

  // LOAD CONNECTED MENTORS
  useEffect(() => {
    const savedMentors =
      JSON.parse(localStorage.getItem("connectedMentors")) || [];
    setConnectedMentors(savedMentors);
  }, []);

  const mentors = [
    {
      name: "Anita Sharma",
      expertise: "Small Business Strategy",
      experience: "8 Years Experience",
      category: "Business Mentor",
      image: "👩‍💼",
      availability: "Available",
      color: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Rahul Verma",
      expertise: "Digital Marketing",
      experience: "6 Years Experience",
      category: "Marketing Mentor",
      image: "👨‍💻",
      availability: "Available",
      color: "bg-green-50 dark:bg-green-900/20",
    },
    {
      name: "Sneha Patil",
      expertise: "Fashion & Tailoring",
      experience: "10 Years Experience",
      category: "Startup Mentor",
      image: "👗",
      availability: "Busy",
      color: "bg-pink-50 dark:bg-pink-900/20",
    },
    {
      name: "Amit Joshi",
      expertise: "Freelancing & Tech",
      experience: "5 Years Experience",
      category: "Technology Mentor",
      image: "💻",
      availability: "Available",
      color: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      name: "Priya Kulkarni",
      expertise: "Food Startup Guidance",
      experience: "7 Years Experience",
      category: "Food Business Mentor",
      image: "🍲",
      availability: "Available",
      color: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      name: "Vikram Desai",
      expertise: "Financial Planning",
      experience: "9 Years Experience",
      category: "Finance Mentor",
      image: "💰",
      availability: "Busy",
      color: "bg-orange-50 dark:bg-orange-900/20",
    },
  ];

  // CONNECT MENTOR
  const connectMentor = (mentor) => {
    const alreadyConnected = connectedMentors.find(
      (m) => m.name === mentor.name
    );

    if (!alreadyConnected) {
      const updatedMentors = [...connectedMentors, mentor];

      setConnectedMentors(updatedMentors);

      localStorage.setItem(
        "connectedMentors",
        JSON.stringify(updatedMentors)
      );

      alert("Mentor Connected Successfully 🚀");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-16 px-6 transition-colors duration-300">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Meet Our Mentors
          </h1>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">
            Connect with experienced mentors who can guide, support, and help
            you grow your entrepreneurial journey.
          </p>
        </div>

        {/* MENTOR GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`${mentor.color} dark:text-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent dark:border-gray-800`}
            >
              {/* ICON */}
              <div className="text-6xl">{mentor.image}</div>

              {/* DETAILS */}
              <div className="mt-6">

                <span className="bg-white dark:bg-gray-800 px-4 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">
                  {mentor.category}
                </span>

                <h2 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
                  {mentor.name}
                </h2>

                <p className="mt-3 text-blue-700 dark:text-blue-300 font-medium">
                  {mentor.expertise}
                </p>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {mentor.experience}
                </p>

                {/* AVAILABILITY */}
                <div className="mt-4">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium ${
                      mentor.availability === "Available"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                    }`}
                  >
                    {mentor.availability}
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => connectMentor(mentor)}
                  className="mt-6 bg-white dark:bg-gray-800 px-5 py-2 rounded-xl text-blue-700 dark:text-blue-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  {connectedMentors.find((m) => m.name === mentor.name)
                    ? "Connected ✅"
                    : "Connect Mentor"}
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Mentors;