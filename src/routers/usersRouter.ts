import express from "express";
import controllers from "../controllers/usersController"

const usersRouter = express.Router();

usersRouter.get("/users", controllers.getUsers);

usersRouter.post("/users", controllers.addUser);

usersRouter.delete("/users:id", controllers.deleteUser);

usersRouter.put("/users:id", controllers.updateUser);

export default usersRouter;