import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from "next-auth/providers/credentials";
import { connectDatabas } from "@/app/libs/Database";
import { Data } from "@/app/models/model";
import {cookies} from "next/headers"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.ID,
            clientSecret:process.env.KEY
        }),
        CredentialsProvider({
            id:"credentials",
            name:"credentials",
            credentials:{
                email:{label:"email",type:"email"},
                pass:{label:"password",type:"password"}
            },
            async authorize(credentials){
                await connectDatabas()
                // console.log(credentials.email)
                const checkEmail = await Data.findOne({email:credentials.email})
                if(!checkEmail){
                    return null
                }
                const checkPass = await bcrypt.compare(credentials.pass,checkEmail.pass)
                // console.log(checkPass)
                if(!checkPass){
                    return null
                }
                const token = await jwt.sign({_id:checkEmail.email},process.env.JWT,{expiresIn:"3h"})
                cookies().set('next_auth',token)
                return checkEmail
            }
        })
    ],
    pages:{
        signIn:"/login"
    },
    session:{
        strategy:"jwt"
    },
    secret:process.env.NEXT_SECRET,
})

export {handler as GET ,handler as POST}