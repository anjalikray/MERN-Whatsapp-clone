import mongoose from "mongoose";

const Connection = async () => {
    const DB_URL = process.env.DB_URL;
    try {
        await mongoose.connect(DB_URL);
        console.log("Database connected succesfully")
    } catch (error) {
        console.log("Error while connecting to database", error.message);
    }
};

export default Connection;

