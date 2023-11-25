import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
const options = {}

let mongoClient: MongoClient

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  )
}

export async function connectToDatabase() {
  if (!uri) return null

  try {
    if (mongoClient) {
      return mongoClient
    }
    mongoClient = await new MongoClient(uri, options).connect()
    console.log("Connected to MongoDB")
    return mongoClient
  } catch (e) {
    console.log(e)
    throw e
  }
}
