import express from "express";
import { getActivities } from "../services/stravaService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const activities = await getActivities();

    // Only send runs
    const runs = activities.filter(a => a.type === "Run");

    res.json(runs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

export default router;