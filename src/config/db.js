import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';

const connectToDB = async () => {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true })
    try {
        console.log('connect to db')
    } catch (error) {
        console.log(error.message)
    };
}

export default connectToDB