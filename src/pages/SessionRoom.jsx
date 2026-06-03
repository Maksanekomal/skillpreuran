

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

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

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);

  const [recording, setRecording] = useState(false);
const [seconds, setSeconds] = useState(0);
const videoRef = useRef(null);

const sendMessage = () => {
  if (!message.trim()) return;

  const userMessage = message;

  setChat((prev) => [
    ...prev,
    {
      sender: "user",
      text: userMessage,
    },
  ]);

  setMessage("");

  let mentorReply = "";

  const msg = userMessage.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    mentorReply =
      "Hello 👋 Welcome to the mentoring session. How can I help you today?";
  }

  else if (msg.includes("business")) {
    mentorReply =
      "Starting a business begins with identifying a problem and creating a solution. What business idea are you working on?";
  }

  else if (msg.includes("marketing")) {
    mentorReply =
      "Digital marketing includes SEO, Social Media, Content Marketing and Paid Ads. Which area would you like to learn?";
  }

  else if (msg.includes("startup")) {
    mentorReply =
      "A successful startup starts with market research and customer validation before investing money.";
  }

  else if (msg.includes("money")) {
    mentorReply =
      "Managing cash flow is one of the most important parts of any business.";
  }

  else if (msg.includes("thank")) {
    mentorReply =
      "You're welcome. Feel free to ask more questions.";
  }

  else {
    mentorReply =
      "Interesting question. Could you tell me a little more about it?";
  }

  setTimeout(() => {
    setChat((prev) => [
      ...prev,
      {
        sender: "mentor",
        text: mentorReply,
      },
    ]);

    speechSynthesis.speak(
      new SpeechSynthesisUtterance(mentorReply)
    );
  }, 1000);
};

  useEffect(() => {
  const startCamera = async () => {
    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.log("Camera Error:", error);
    }
  };

  startCamera();
}, []);

useEffect(() => {
  const timer = setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(timer);
}, []);
  
const toggleMic = () => {
  if (videoRef.current?.srcObject) {
    const tracks =
      videoRef.current.srcObject.getAudioTracks();

    tracks.forEach((track) => {
      track.enabled = !micOn;
    });
  }

  setMicOn(!micOn);
};

  const toggleCamera = () => {
  if (videoRef.current?.srcObject) {
    const tracks =
      videoRef.current.srcObject.getVideoTracks();

    tracks.forEach((track) => {
      track.enabled = !cameraOn;
    });
  }

  setCameraOn(!cameraOn);
};
  

  const toggleScreenShare = async () => {
    try {
      if (!screenSharing) {
        await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });

        setScreenSharing(true);
      } else {
        setScreenSharing(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

  {/* HEADER */}

<div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 flex justify-between items-center">

  <div>

    <h1 className="text-3xl font-bold dark:text-white">
      Session Room 🎥
    </h1>

    <div className="flex items-center gap-2 mt-2">

      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

      <span className="text-green-600 font-medium">
        Live Session
      </span>

    </div>

    <p className="text-gray-500 mt-2">
      Connected with
    </p>

    <h2 className="text-xl font-semibold text-blue-600">
      {mentorName}
    </h2>

    <p className="text-purple-600 font-semibold mt-2">
      Session Time:
      {" "}
      {Math.floor(seconds / 60)}m
      {" "}
      {seconds % 60}s
    </p>

  </div>

  <div className="flex gap-3">

    {recording && (
      <div className="bg-red-100 text-red-600 px-4 py-2 rounded-xl font-semibold">
        🔴 Recording
      </div>
    )}

    <button
      onClick={() => navigate("/dashboard")}
      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
    >
      Leave Session
    </button>

  </div>

</div>

        {/* VIDEO SECTION */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Mentor Video */}

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">

            <h3 className="font-bold text-xl mb-4 dark:text-white">
              Mentor
            </h3>

<div className="h-80 rounded-2xl bg-gray-200 dark:bg-gray-800 flex flex-col items-center justify-center">

  <div className="text-8xl animate-bounce">
    👩‍🏫
  </div>

  <h2 className="text-2xl font-bold mt-4 text-blue-600">
    {mentorName}
  </h2>

  <p className="text-green-600 mt-2">
    AI Mentor Active 🎙️
  </p>

</div>

          </div>

          {/* User Video */}

     
     {/* User Video */}

<div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">

  <h3 className="font-bold text-xl mb-4 dark:text-white">
    You
  </h3>

  <div className="h-80 rounded-2xl overflow-hidden bg-black flex items-center justify-center">

    {cameraOn ? (
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="text-white text-2xl">
        📷 Camera Off
      </div>
    )}

  </div>

</div>
</div>
        {/* CONTROLS */}

        <div className="flex justify-center gap-6 mt-8 flex-wrap">

          <button
            onClick={toggleMic}
            className={`px-6 py-3 rounded-xl text-white ${
              micOn
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-600"
            }`}
          >
            {micOn ? "🎤 Mic On" : "🔇 Mic Off"}
          </button>

          <button
            onClick={toggleCamera}
            className={`px-6 py-3 rounded-xl text-white ${
              cameraOn
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600"
            }`}
          >
            {cameraOn ? "📹 Camera On" : "📷 Camera Off"}
          </button>
<button
  onClick={() => setRecording(!recording)}
  className={`px-6 py-3 rounded-xl text-white ${
    recording
      ? "bg-red-600"
      : "bg-purple-600 hover:bg-purple-700"
  }`}
>
  {recording
    ? "⏺ Recording..."
    : "🎬 Record"}
</button>
          <button
            onClick={toggleScreenShare}
            className={`px-6 py-3 rounded-xl text-white ${
              screenSharing
                ? "bg-orange-600"
                : "bg-yellow-600 hover:bg-yellow-700"
            }`}
          >
            {screenSharing
              ? "🛑 Stop Sharing"
              : "🖥 Share Screen"}
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
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  }}
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