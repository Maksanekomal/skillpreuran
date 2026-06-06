
import { io } from "socket.io-client";

const socket = io(
  "https://skillpreneur-backend.onrender.com"
);

export default socket;