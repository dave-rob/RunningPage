import express from "express";
import { getDB } from "../db/db.js";

const router = express.Router();

router.get("/:marathon", async (req, res) => {
  try {
    const { marathon } = req.params;

    const db = getDB();
    const runs = await db.collection(marathon).find({ type: "Run" }).toArray();

    const totalMiles =
      runs.reduce((sum, run) => sum + run.distance, 0) / 1609.34;

    const filteredRuns = runs.filter((run) => {
      const miles = run.distance / 1609.34;
      return miles < 26;
    });
    const longestRun =
      Math.max(...filteredRuns.map((run) => run.distance)) / 1609.34;

    res.json({
      totalMiles: totalMiles.toFixed(2),
      longestRun: longestRun.toFixed(2),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch races" });
  }
});

export default router;
