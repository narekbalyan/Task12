import express from "express";
import controller from "../controllers/fileConverterController";

const router = express.Router();

router.get("/convertfile", controller.convertFile);

export default router;