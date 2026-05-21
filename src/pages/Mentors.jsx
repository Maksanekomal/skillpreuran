
const Mentors = () => {

  const mentors = [

    {
      name: "Anita Sharma",
      expertise: "Small Business Strategy",
      experience: "8 Years Experience",
      category: "Business Mentor",
      image: "👩‍💼",
      color: "bg-blue-50",
    },

    {
      name: "Rahul Verma",
      expertise: "Digital Marketing",
      experience: "6 Years Experience",
      category: "Marketing Mentor",
      image: "👨‍💻",
      color: "bg-green-50",
    },

    {
      name: "Sneha Patil",
      expertise: "Fashion & Tailoring",
      experience: "10 Years Experience",
      category: "Startup Mentor",
      image: "👗",
      color: "bg-pink-50",
    },

    {
      name: "Amit Joshi",
      expertise: "Freelancing & Tech",
      experience: "5 Years Experience",
      category: "Technology Mentor",
      image: "💻",
      color: "bg-purple-50",
    },

    {
      name: "Priya Kulkarni",
      expertise: "Food Startup Guidance",
      experience: "7 Years Experience",
      category: "Food Business Mentor",
      image: "🍲",
      color: "bg-yellow-50",
    },

    {
      name: "Vikram Desai",
      expertise: "Financial Planning",
      experience: "9 Years Experience",
      category: "Finance Mentor",
      image: "💰",
      color: "bg-orange-50",
    },

  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-800">
            Meet Our Mentors
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">

            Connect with experienced mentors who can guide,
            support, and help you grow your entrepreneurial journey.

          </p>

        </div>

        {/* MENTOR GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {
            mentors.map((mentor, index) => (

              <div
                key={index}
                className={`${mentor.color} p-8 rounded-3xl shadow-sm hover:shadow-xl transition`}
              >

                {/* ICON */}
                <div className="text-6xl">
                  {mentor.image}
                </div>

                {/* DETAILS */}
                <div className="mt-6">

                  <span className="bg-white px-4 py-1 rounded-full text-sm font-medium text-gray-700">
                    {mentor.category}
                  </span>

                  <h2 className="mt-5 text-2xl font-bold text-gray-800">
                    {mentor.name}
                  </h2>

                  <p className="mt-3 text-blue-700 font-medium">
                    {mentor.expertise}
                  </p>

                  <p className="mt-2 text-gray-600">
                    {mentor.experience}
                  </p>

                  {/* BUTTON */}
                  <button className="mt-6 bg-white px-5 py-2 rounded-xl text-blue-700 font-medium hover:bg-gray-100 transition">

                    Connect Mentor

                  </button>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>
  );
};

export default Mentors;