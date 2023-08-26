import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    pass:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

export const Data = mongoose.models.userData || mongoose.model("userData",dataSchema)