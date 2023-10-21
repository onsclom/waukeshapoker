import mongoose, { Schema } from 'mongoose';

const playerDataSchema = new Schema(
    {
        name: String,
        amount: Number
    }
);

const PlayerData = mongoose.models.PlayerData || mongoose.model("PlayerData", playerDataSchema);

export default PlayerData;