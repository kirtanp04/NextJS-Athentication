import { connectDatabas } from "@/app/libs/Database";
import { Data } from "@/app/models/model";
// import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req) {
    const {email,pass} = await req.json()
    try{
        await connectDatabas()
        const hashPass = await bcrypt.hash(pass,10)
        await Data.create({email,pass:hashPass})
        return NextResponse.json({mess:"Account created"},{status:202})
    }catch{
        return NextResponse.json({mess:"server error"},{status:400})
    }
}