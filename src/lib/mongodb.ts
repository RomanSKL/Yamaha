import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;

const options = {};

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

// Cache the client on globalThis to survive Next.js hot reloads in dev
declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}

export async function getDb(): Promise<Db> {
  if (cachedDb) return cachedDb;

  if (!cachedClient) {
    if (process.env.NODE_ENV === "development" && global._mongoClient) {
      cachedClient = global._mongoClient;
    } else {
      cachedClient = new MongoClient(uri, options);
      await cachedClient.connect();
      if (process.env.NODE_ENV === "development") {
        global._mongoClient = cachedClient;
      }
    }
  }

  cachedDb = cachedClient.db("yamaha");
  return cachedDb;
}
