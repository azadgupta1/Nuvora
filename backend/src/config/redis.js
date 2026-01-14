import { Redis } from "@upstash/redis";

let redis = null;

try {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  console.log("Upstash Redis initialized");
} catch (error) {
  console.warn("Redis init failed, continuing without cache");
}

export default redis;
