
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MentorDetails = () => {
 const { mentorName } = useParams();
const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const mentors = {
    "anita-sharma": {
      name: "Anita Sharma",
      image: "👩‍💼",
      expertise: "Small Business Strategy",
      experience: "8 Years Experience",
      category: "Business Mentor",
      availability: "Available",
      description:
        "Helps entrepreneurs validate business ideas, create business plans, and build sustainable business models.",
      skills: [
        "Business Planning",
        "Market Research",
        "Startup Validation",
        "Growth Strategy",
      ],
    },

    "rahul-verma": {
      name: "Rahul Verma",
      image: "👨‍💻",
      expertise: "Digital Marketing",
      experience: "6 Years Experience",
      category: "Marketing Mentor",
      availability: "Available",
      description:
        "Expert in digital marketing, social media growth, branding, and customer acquisition.",
      skills: [
        "SEO",
        "Social Media Marketing",
        "Branding",
        "Content Marketing",
      ],
    },

    "sneha-patil": {
      name: "Sneha Patil",
      image: "👗",
      expertise: "Fashion & Tailoring",
      experience: "10 Years Experience",
      category: "Startup Mentor",
      availability: "Busy",
      description:
        "Guides fashion entrepreneurs in tailoring, boutique setup, and clothing brands.",
      skills: [
        "Tailoring",
        "Fashion Design",
        "Boutique Setup",
        "Customer Handling",
      ],
    },

    "amit-joshi": {
      name: "Amit Joshi",
      image: "💻",
      expertise: "Freelancing & Tech",
      experience: "5 Years Experience",
      category: "Technology Mentor",
      availability: "Available",
      description:
        "Supports learners in freelancing, tech services, and online business opportunities.",
      skills: [
        "Freelancing",
        "Web Development",
        "Client Management",
        "Tech Consulting",
      ],
    },

    "priya-kulkarni": {
      name: "Priya Kulkarni",
      image: "🍲",
      expertise: "Food Startup Guidance",
      experience: "7 Years Experience",
      category: "Food Business Mentor",
      availability: "Available",
      description:
        "Helps food entrepreneurs launch cloud kitchens, catering businesses, and food startups.",
      skills: [
        "Food Business",
        "Cloud Kitchen",
        "Menu Planning",
        "Food Marketing",
      ],
    },

    "vikram-desai": {
      name: "Vikram Desai",
      image: "💰",
      expertise: "Financial Planning",
      experience: "9 Years Experience",
      category: "Finance Mentor",
      availability: "Busy",
      description:
        "Specializes in budgeting, investment planning, business finance, and funding strategies.",
      skills: [
        "Financial Planning",
        "Budgeting",
        "Funding",
        "Business Finance",
      ],
    },
  };

  const mentor = mentors[mentorName];

  const handleBooking = () => {
  if (
    !bookingData.name ||
    !bookingData.email ||
    !bookingData.date ||
    !bookingData.time
  ) {
    alert("Please fill all fields");
    return;
  }

  const existingBookings =
    JSON.parse(localStorage.getItem("mentorBookings")) || [];

  const newBooking = {
    mentor: mentor.name,
    ...bookingData,
    status: "Upcoming",
  };

  localStorage.setItem(
    "mentorBookings",
    JSON.stringify([...existingBookings, newBooking])
  );

  alert("Session Booked Successfully 🚀");

  setShowModal(false);

  setBookingData({
    name: "",
    email: "",
    date: "",
    time: "",
  });
};
  if (!mentor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Mentor Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-16 px-6">

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-10">

        <div className="text-center">

          <div className="text-8xl">
            {mentor.image}
          </div>

          <h1 className="text-4xl font-bold mt-6 text-gray-900 dark:text-white">
            {mentor.name}
          </h1>

          <p className="text-blue-600 dark:text-blue-300 mt-3 text-xl">
            {mentor.expertise}
          </p>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {mentor.experience}
          </p>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            About Mentor
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-8">
            {mentor.description}
          </p>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Expertise Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-6">

            {mentor.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl"
              >
                ✅ {skill}
              </div>
            ))}

          </div>

        </div>

        <div className="mt-10 flex gap-4">

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Book Session
          </button>
<button
  onClick={() =>
    navigate(`/chat/${mentorName}`)
  }
  className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
>
  Send Message
</button>
        </div>

      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl w-[450px]">

            <h2 className="text-2xl font-bold mb-6 dark:text-white">
              Book Mentor Session
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              value={bookingData.name}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  name: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              value={bookingData.email}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  email: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="date"
              value={bookingData.date}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  date: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="time"
              value={bookingData.time}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  time: e.target.value,
                })
              }
              className="w-full border p-3 rounded-lg mb-6"
            />

            <div className="flex gap-4">

              <button
                onClick={handleBooking}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Confirm
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default MentorDetails;