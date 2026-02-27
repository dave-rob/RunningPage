import express from "express";
import cors from "cors";
import activitiesRoute from "./routes/activities.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/activities", activitiesRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));