import connectMongoDB from "../../../../lib/mongo";
import PlayerData from "../../../../lib/models/playerData";
// import { NextResponse } from "next/server";

const handler = async (request, response) => {
    // const {name, amount} = await request.json();
    // await connectMongoDB;
    // await PlayerData.create({ name, amount});
    // return NextResponse.json({message: 'Player Added'}, {status: 201})

    if (request.method === 'POST') {
        const database = await connectMongoDB();
        const playerData = request.body;
        const player = new PlayerData(playerData);

        try {
            await player.save();
            response.status(201).json({message: 'Player data saved.'});
        } catch (error) {
            response.status(500).json({message: 'Error inserting player data'});
        }
    } 
    
    if (request.method === 'GET') {
        try {
            // Fetch data from MongoDB collection
            const data = await PlayerData.find();
            response.status(200).json(data);
        } catch (error) {
            console.error('An error occurred', error);
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

}

export default handler;