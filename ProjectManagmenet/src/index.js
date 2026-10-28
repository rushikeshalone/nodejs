import "./config/env.js";
import app from "./app.js";
import connectDB from "./db/index.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const port = Number(process.env.PORT) || 3000;

try {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
} catch (error) {
  console.error("Failed to start the server:", error);
  process.exit(1);
}
