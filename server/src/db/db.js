import { MongoClient, ServerApiVersion } from "mongodb";

let client;

export async function connectDB() {
  try {
    client = new MongoClient(process.env.MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    console.log("✅ Connected to MongoDB");

    return client.db("daveRuns");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

export function getDB() {
  return client.db("daveRuns");
}
