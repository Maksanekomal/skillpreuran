
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>

          <h1 className="text-3xl font-bold text-blue-400">
            Skillpreuran
          </h1>

          <p className="mt-4 text-gray-400 leading-7">

            Helping individuals transform practical skills
            into successful and sustainable businesses.

          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <Link
              to="/"
              className="hover:text-white transition"
            >
              Home
            </Link>

            <Link
              to="/explore"
              className="hover:text-white transition"
            >
              Find Ideas
            </Link>

            <Link
              to="/about"
              className="hover:text-white transition"
            >
              About
            </Link>

            <Link
              to="/learning"
              className="hover:text-white transition"
            >
              Resources
            </Link>

          </div>

        </div>

        {/* Resources */}
        <div>

          <h2 className="text-xl font-semibold mb-4">
            Resources
          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <Link
              to="/roadmap/tailoring"
              className="hover:text-white transition"
            >
              Business Roadmaps
            </Link>

            <Link
              to="/learning"
              className="hover:text-white transition"
            >
              Learning Hub
            </Link>

            <Link
              to="/mentors"
              className="hover:text-white transition"
            >
              Mentorship
            </Link>

            <Link
              to="/dashboard"
              className="hover:text-white transition"
            >
              Startup Guidance
            </Link>

          </div>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-xl font-semibold mb-4">
            Contact
          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <p>
              📧 support@skillpreuran.com
            </p>

            <p>
              📍 Pune, India
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-5 text-center text-gray-500">

        © 2026 Skillpreuran. All rights reserved.

      </div>

    </footer>
  );
};

export default Footer;