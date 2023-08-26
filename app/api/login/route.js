import { connectDatabas } from "@/app/libs/Database";
import { Data } from "@/app/models/model";
import {cookies} from "next/headers"
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


export async function POST(req){
    const {email,pass} = await req.json()
    try{
        await connectDatabas()
        const checkEmail = await Data.findOne({email:email})
        if(!checkEmail){
            return NextResponse.json({mess:"create account first"})
        }else{

            const password = await bcrypt.compare(pass,checkEmail.pass)
            
            if(!password){
                return NextResponse.json({mess:"wrong password"})
            }else{
                const token = jwt.sign({id:checkEmail._id},process.env.JWT)
                cookies().set('next_auth',token)
                return NextResponse.json({mess:"success"},{status:201})
            }
        }
    }catch{
        return NextResponse.json({mess:"server error"},{status:404})
    }
}