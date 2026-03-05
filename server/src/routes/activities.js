import express from "express";
import { getActivities } from "../services/stravaService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { after, before, per_page, type } = req.query;

    const activities = await getActivities({
      after,
      before,
      per_page: 10,
      type: "Run",
    });

    res.json(activities);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

router.get("/marathon/colfax", async (req, res) => {
  try {
    const colfaxStart = 1766966400;
    const activities = await getActivities({
      after: colfaxStart,
      type: "Run",
      per_page: 200,
    });
    res.json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Colfax training" });
  }
});

export default router;