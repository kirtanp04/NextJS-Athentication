import mongoose from "mongoose";

export const connectDatabas = async() =>{
    try{
        await mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("connected to database")
        })
    }catch{
        console.log("error while connecting with Database")
    }
}