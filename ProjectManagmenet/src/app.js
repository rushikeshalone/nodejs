import express, { urlencoded } from "express";
import cors from "cors";
import "./config/env.js";



const app = express();

// Basic Configuration

app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// CORS configuration
const corsOrigins = process.env.CORS_ORIGIN?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: corsOrigins?.length ? corsOrigins : "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Import the routes
import healthCheckRouter from "./routes/healthCheck.route.js";
import TestRouter from "./routes/test.route.js"

app.use("/api/v1/healthCheck", healthCheckRouter);
app.use("/api/test",TestRouter)

export default app;
