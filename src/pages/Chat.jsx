

import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Chat = () => {
  const { mentorId } = useParams();

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const bottomRef = useRef();

  const mentorData = {
    "anita-sharma": {
      name: "Anita Sharma",
      image: "👩‍💼",
    },
    "rahul-verma": {
      name: "Rahul Verma",
      image: "👨‍💻",
    },
    "sneha-patil": {
      name: "Sneha Patil",
      image: "👗",
    },
    "amit-joshi": {
      name: "Amit Joshi",
      image: "💻",
    },
    "priya-kulkarni": {
      name: "Priya Kulkarni",
      image: "🍲",
    },
    "vikram-desai": {
      name: "Vikram Desai",
      image: "💰",
    },
  };

  const mentor =
    mentorData[mentorId] || {
      name: "Mentor",
      image: "👨‍🏫",
    };

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
  `https://skillpreneur-backend.onrender.com/api/messages/${mentorId}`
);

      setMessages(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!text.trim()) return;

    try {
     await axios.post(
  "https://skillpreneur-backend.onrender.com/api/messages",
        {
          mentorId,
          message: text,
        }
      );

      setText("");

      setTimeout(() => {
        fetchMessages();
      }, 500);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-10 px-4">

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="bg-blue-600 text-white p-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              {mentor.image}
            </div>

            <div>

              <h2 className="text-xl font-bold">
                {mentor.name}
              </h2>

              <p className="text-green-200 text-sm">
                🟢 Online
              </p>

            </div>

          </div>

        </div>

        {/* Chat Area */}

        <div className="h-[600px] overflow-y-auto p-6 bg-gray-50 dark:bg-gray-950">

          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-20">
              👋 Start chatting with your mentor
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`flex mb-4 ${
                msg.senderType === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-3 rounded-3xl shadow-md ${
                  msg.senderType === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 dark:text-white"
                }`}
              >
                <p>{msg.message}</p>

                <p className="text-xs opacity-70 mt-2">
                  {new Date(
                    msg.createdAt
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}

          <div ref={bottomRef}></div>

        </div>

        {/* Input */}

        <div className="border-t dark:border-gray-700 p-4 flex gap-3">

          <input
            type="text"
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
            placeholder="Type your message..."
            className="flex-1 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
};

export default Chat;