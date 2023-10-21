import connectMongoDB from "../../../../lib/mongo";
import PlayerData from "../../../../lib/models/playerData";
// import { NextResponse } from "next/server";

const handler = async (request, response) => {
  if (request.method === "POST") {
    const playerData = request.body;
    const player = new PlayerData(playerData);

    try {
      await player.save();
      response.status(201).json({ message: "Player data saved." });
    } catch (error) {
      response.status(500).json({ message: "Error inserting player data" });
    }
  }

  if (request.method === "GET") {
    try {
      // Connect to the MongoDB database
      await connectMongoDB();
      // Use Mongoose to retrieve player data from the PlayerData collection
      const playerData = await PlayerData.find({});
      response.status(200).json(playerData);
    } catch (error) {
      response.status(500).json({ message: "Error retrieving player data" });
    }
  }
};

export default handler;
