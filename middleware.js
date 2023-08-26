
import { NextResponse } from "next/server";

export function middleware(req){
   
    const getCookie = req.cookies.get('next_auth')
    if(req.nextUrl.pathname.startsWith("/about")){
        if(!getCookie){
            return NextResponse.rewrite(new URL('/login', req.url))
        }
    }

    
}

