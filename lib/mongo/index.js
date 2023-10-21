import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error: ' + error);
    }
};

export default connectMongoDB;