

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const SessionRoom = () => {
  const { mentorName } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      sender: "mentor",
      text: "Welcome to the mentoring session 👋",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setChat([
      ...chat,
      {
        sender: "user",
        text: message,
      },
    ]);

    setMessage("");

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          sender: "mentor",
          text: "Thanks for sharing. Let's discuss that further.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold dark:text-white">
              Session Room 🎥
            </h1>

            <p className="text-gray-500 mt-1">
              Connected with
            </p>

            <h2 className="text-xl font-semibold text-blue-600">
              {mentorName}
            </h2>

          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
          >
            Leave Session
          </button>

        </div>

        {/* VIDEO SECTION */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Mentor Video */}

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">

            <h3 className="font-bold text-xl mb-4 dark:text-white">
              Mentor
            </h3>

            <div className="h-80 rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-2xl">
              👩‍🏫 {mentorName}
            </div>

          </div>

          {/* User Video */}

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">

            <h3 className="font-bold text-xl mb-4 dark:text-white">
              You
            </h3>

            <div className="h-80 rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-2xl">
              👨‍💻 Your Camera
            </div>

          </div>

        </div>

        {/* CONTROLS */}

        <div className="flex justify-center gap-6 mt-8">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            🎤 Mic
          </button>

          <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
            📹 Camera
          </button>

          <button className="bg-yellow-600 text-white px-6 py-3 rounded-xl">
            🖥 Share Screen
          </button>

        </div>

        {/* CHAT */}

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg mt-10 p-6">

          <h3 className="text-2xl font-bold mb-6 dark:text-white">
            Live Chat 💬
          </h3>

          <div className="h-64 overflow-y-auto border rounded-xl p-4 dark:border-gray-700">

            {chat.map((msg, index) => (

              <div
                key={index}
                className={`mb-3 ${
                  msg.sender === "user"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-xl ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {msg.text}
                </span>
              </div>

            ))}

          </div>

          <div className="flex gap-3 mt-4">

            <input
              type="text"
              placeholder="Type message..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              className="flex-1 border dark:border-gray-700 rounded-xl px-4 py-3 dark:bg-gray-800 dark:text-white"
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl"
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SessionRoom;