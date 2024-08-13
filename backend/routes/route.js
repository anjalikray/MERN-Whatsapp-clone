import express from "express";
import { addUser, getUsers } from "../controller/user-controller.js";
import { getConversation } from "../controller/conversation-controller.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users" , getUsers)
route.post("/conversation/add", getConversation);

export default route;
