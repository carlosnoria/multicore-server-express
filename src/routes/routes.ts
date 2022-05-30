import { Router } from "express";
import healthController from "../controllers/healthController";
import messageController from "../controllers/messageController";

const router = Router();

router.get("/api/health", healthController);
router.get("/api/message", messageController);

export default router;
