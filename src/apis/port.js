import io from "socket.io-client";
import env from "react-dotenv";

const port = env.API_URL;
const socket = io(port);
export default socket;
