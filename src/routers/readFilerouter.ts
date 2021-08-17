import express from "express";
import controller from "../controllers/readFileController";
const router = express.Router();

router.get("/readfile", controller.readStream);

export default router;