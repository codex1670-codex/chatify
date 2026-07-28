import mongoose from "mongoose"

export const connectDB= async() => {
    try{
        const { MONGO_URI } = process.env;
        if (!MONGO_URI) throw new Error("MONNGO_URI is not set");
        
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED", conn.connection.host);
    } catch (error){
        console.error("error connection to MONGODB:", error);
        process.exit(1);
    }
};