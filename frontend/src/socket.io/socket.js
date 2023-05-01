import { io } from "socket.io-client";
import { getUser } from "../localstorage manger/localstorage";

export const socket = io("http://localhost:5000", { autoConnect: false });

export const socketConnect = () => {
  if (getUser()) {
    socket.auth = {
      userId: getUser()._id,
    };
    socket.connect();
  }
};
