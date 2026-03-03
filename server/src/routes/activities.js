import express from "express";
import { getActivities, getColfaxTraining } from "../services/stravaService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  // try {
  //   const activities = await getActivities();

  //   // Only send runs
  //   const runs = activities.filter(a => a.type === "Run");

  //   res.json(runs);
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ error: "Failed to fetch activities" });
  // }
  try {
    const { after, before, per_page, type } = req.query;

    const activities = await getActivities({
      after,
      before,
      per_page,
      type,
    });

    res.json(activities);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
});

// router.get("/marathon/colfax", async (req, res) => {
//   try {
//     const activities = await getColfaxTrainingActi();

//     // Only send runs
//     const runs = activities.filter(a => a.type === "Run");

//     res.json(runs);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch activities" });
//   }
// });

export default router;