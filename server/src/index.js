import express from "express";
import cors from "cors";
import activitiesRoute from "./routes/activities.js";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import dns from "node:dns/promises"
import racesRoute from "./routes/races.js";

dns.setServers(["1.1.1.1"]);
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/activities", activitiesRoute);
app.use("/api/races", racesRoute);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});