// "use client"
import React from 'react'
import heroImg from "../../public/hero.png"
import Image from 'next/image'
import Link from 'next/link'
// import { getSession, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
// import {cookies} from "next/headers"

const Landing = async() => {
  // const session = useSession()
  // console.log(session)
  // const getCookie = await cookies().get('next_auth')
  // if(!getCookie){
  //   redirect('/login')
  // }
  return (
    <>
      <main className="flex flex-wrap justify-center align-middle my-10">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              User Authentication in NextJs
            </h1>
            <p className="py-5 text-xl leading-normal text-white textwhite lg:text-xl xl:text-2xl">
            Authentication verifies who a user is, while authorization controls what a user can access. Next.js supports multiple authentication patterns, each designed for different use cases.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href={'/about'} className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                About
              </Link>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="600"
              height="600"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </main>

    </>
  )
}

export default Landing


// export async function getServerSideProps({req}){
//   const session = await getSession({req})

//   if(!session){
//     return{
//       redirect:{
//         destination:'/login',
//         permanent:false
//       }
//     }
//   }

//   return{
//     props:{session}
//   }
// }