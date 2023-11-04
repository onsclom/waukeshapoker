import connectMongoDB from "../../../../lib/mongo";
import PlayerData from "../../../../lib/models/playerData";
// import { NextResponse } from "next/server";

const handler = async (request, response) => {
  // POST REQUEST
  if (request.method === "POST") {
    const newPlayerData = request.body;
    const player = new PlayerData(newPlayerData);

    try {
      //if player.name exists, add player.value
      const existingPlayer = await PlayerData.findOne({ name: player.name });

      if (existingPlayer) {
        // If the name exists, update the amount
        await PlayerData.updateOne(
          { name: player.name },
          { $set: { amount: existingPlayer.amount + player.amount } }
        );
        response.status(202).json({ message: "Amount updated" });
        console.log(existingPlayer, "Existing player found. Player Updated");
      } else {
        await player.save();
        response.status(201).json({ message: "Player added." });
        console.log(existingPlayer, "Player not found. New Player Added");
      }
    } catch (error) {
      response.status(500).json({ message: "Error inserting player data" });
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
