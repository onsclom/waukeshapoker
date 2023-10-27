import connectMongoDB from "../../../../lib/mongo";
import PlayerData from "../../../../lib/models/playerData";
// import { NextResponse } from "next/server";

const handler = async (request, response) => {
  // POST REQUEST
  if (request.method === "POST") {
    const newPlayerData = request.body;
    const player = new PlayerData(newPlayerData);
    const { name, amount } = player;

    try {
      //if player.name exists, add player.value
      const existingPlayer = await PlayerData.findOne({ name: name });

      if (existingPlayer.name === name) {
        // If the name exists, update the amount
        await PlayerData.updateOne(
          // { name: name },
          { $set: { amount: existingPlayer.amount + amount } }
        );
        response.json({ message: "Amount updated" });
      } else {
        await player.save();
        response.status(201).json({ message: "Player added." });
      }
    } catch (error) {
      response.status(500).json({ message: "Error inserting player data" });
      console.error(error);
    }
  }

  // GET REQUEST
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
