
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {

  // GET USER FROM LOCAL STORAGE
  const user = JSON.parse(localStorage.getItem("user"));

  // LOGOUT FUNCTION
  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (

    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition duration-300">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>

          <h1 className="text-3xl font-bold text-blue-700">
            Skillpreuran
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            Transform Skills into Businesses
          </p>

        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-white font-medium">

          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/explore" className="hover:text-blue-600 transition">
            Find Ideas
          </Link>

          <Link to="/assessment" className="hover:text-blue-600 transition">
            Skill Assessment
          </Link>

          <Link to="/saved-ideas" className="hover:text-blue-600 transition">
            Saved Ideas
          </Link>

          <Link to="/mentors" className="hover:text-blue-600 transition">
  Mentors
</Link>

<Link to="/dashboard" className="hover:text-blue-600 transition">
  Dashboard
</Link>

        </div>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-4">

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white transition"
          >

            {darkMode ? "☀️" : "🌙"}

          </button>

          {
            user ? (

              <div className="flex items-center gap-4">

                <p className="font-medium text-gray-700 dark:text-white">
                  👋 {user.name}
                </p>

                <button
                  onClick={handleLogout}
                  className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>

              </div>

            ) : (

              <>
                <Link to="/login">

                  <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">

                    Login

                  </button>

                </Link>

                <Link to="/register">

                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">

                    Register

                  </button>

                </Link>
              </>

            )
          }

        </div>

      </div>

    </nav>
  );
};

export default Navbar;