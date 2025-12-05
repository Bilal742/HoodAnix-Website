// import mongoose from "mongoose";

// export const connectDB = async () => {
//   if (mongoose.connections[0].readyState) return;

//   try {
//     await mongoose.connect(process.env.MONGODB_URI || "");
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log("MongoDB Error:", error);
//   }
// };
  

import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MONGODB_URI to .env");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(process.env.MONGODB_URI);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(process.env.MONGODB_URI);
  clientPromise = client.connect();
}

export default clientPromise;
