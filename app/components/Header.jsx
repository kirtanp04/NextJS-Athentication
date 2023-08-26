"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import cookie from 'react-cookies'

const Header = () => {
    const session = useSession()
    const logOut = (e) =>{
        e.preventDefault()
        cookie.remove("next_auth")
        signOut()
    }
    return (
        <>
            <div className="navbar bg-white">
                <div className="flex-1">
                {/* {
                    session?.data?.user?.name  ?  (

                    <a className="btn btn-ghost normal-case text-xl text-slate-600">{session.data.user.name}</a>
                    ):null
                } */}
                {/* { */}
                    {/* !session?.data?.user?.name || !session?.data?.user?.email  ? ( */}
                        <a className="btn btn-ghost normal-case text-xl text-slate-600">NextJs Athentication</a>
                    {/* ): null
                } */}
                {
                    session?.data?.user?.email ? (
                        <a className="btn btn-ghost normal-case text-xl text-slate-600">{session?.data?.user?.email}</a>
                    ):null
                }
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={'/'} className="btn btn-ghost normal-case text-xl text-slate-600">Home</Link></li>
                        <li><Link href={'/about'} className="btn btn-ghost normal-case text-xl text-slate-600">About</Link></li>
                        {
                            session?.status === "authenticated" ? (
                                <li><a onClick={(e)=>logOut(e)} className="btn btn-ghost normal-case text-xl text-slate-600">Logout</a></li>
                            ):(
                                <li><Link href={"/login"} className="btn btn-ghost normal-case text-xl text-slate-600">Login</Link></li>
                            )
                        }    
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header