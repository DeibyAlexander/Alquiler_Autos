import mongoose from "mongoose";

const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_ELN,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("DB connected");
    } catch (error) {
        console.log(error);
        throw new Error("DB cant inicializate")
    }
}

export default dbConnection;