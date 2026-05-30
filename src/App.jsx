

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Roadmap from "./pages/Roadmap";
import SkillAssessment from "./pages/SkillAssessment";
import Learning from "./pages/Learning";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import SavedIdeas from "./pages/SavedIdeas";
import Mentors from "./pages/Mentors";
import Recommendations from "./pages/Recommendations";
import MentorDetails from "./pages/MentorDetails";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "dark" : ""}>

      <BrowserRouter>

        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">

          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <main className="flex-grow">

            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/login" element={<Login />} />

              <Route path="/register" element={<Register />} />

              <Route path="/explore" element={<Explore />} />

              <Route path="/roadmap/:businessType" element={<Roadmap />} />

              <Route path="/mentors" element={<Mentors />} />

              <Route
  path="/skill-assessment"
  element={<SkillAssessment />}
/>

              <Route path="/learning" element={<Learning />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

            <Route
  path="/mentor/:mentorName"
  element={<MentorDetails />}
/>
              <Route
                path="/saved-ideas"
                element={
                  <ProtectedRoute>
                    <SavedIdeas />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/recommendations"
                element={<Recommendations />}
              />

            </Routes>

          </main>

          <Footer />

        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;