import dotenv from "dotenv";
import { setServers } from "node:dns";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
dotenv.config({ path: resolve(projectRoot, ".env") });

const dnsServers = process.env.MONGO_DNS_SERVERS?.split(",")
  .map((server) => server.trim())
  .filter(Boolean);

if (dnsServers?.length) {
  setServers(dnsServers);
}
