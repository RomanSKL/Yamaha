import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
}

function toUser(doc: Record<string, unknown>): User {
  return {
    id: (doc._id as ObjectId).toHexString(),
    name: doc.name as string,
    email: doc.email as string,
    password: doc.password as string,
    image: doc.image as string | undefined,
  };
}

export async function findUserByEmail(email: string): Promise<User | undefined> {
  const db = await getDb();
  const doc = await db
    .collection("users")
    .findOne({ email: email.toLowerCase() });
  return doc ? toUser(doc as Record<string, unknown>) : undefined;
}

export async function findUserById(id: string): Promise<User | undefined> {
  const db = await getDb();
  let oid: ObjectId;
  try {
    oid = new ObjectId(id);
  } catch {
    return undefined;
  }
  const doc = await db.collection("users").findOne({ _id: oid });
  return doc ? toUser(doc as Record<string, unknown>) : undefined;
}

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  const db = await getDb();
  const hashed = bcrypt.hashSync(password, 10);
  const result = await db.collection("users").insertOne({
    name,
    email: email.toLowerCase(),
    password: hashed,
  });
  return {
    id: result.insertedId.toHexString(),
    name,
    email: email.toLowerCase(),
    password: hashed,
  };
}

export async function upsertGoogleUser(profile: {
  name: string;
  email: string;
  image?: string;
}): Promise<User> {
  const db = await getDb();
  const result = await db.collection("users").findOneAndUpdate(
    { email: profile.email.toLowerCase() },
    {
      $set: {
        name: profile.name,
        image: profile.image,
      },
      $setOnInsert: {
        email: profile.email.toLowerCase(),
        password: "",
      },
    },
    { upsert: true, returnDocument: "after" }
  );
  return toUser(result as unknown as Record<string, unknown>);
}
