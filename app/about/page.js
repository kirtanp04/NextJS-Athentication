import React from 'react'
import Header from '../components/Header'

const page = () => {
    return (
        <>
            <main>
                <Header />
                <div className="flex flex-col justify-center align-middle text-center flex-wrap gap-10 m-12 p-12">

                    <div className="flex flex-row flex-wrap gap-10 text-white justify-center align-middle text-center">
                        <h2 className='text-xl'>NextJs</h2>
                        <div className="flex flex-row flex-wrap gap-6 justify-center align-middle text-center">
                            <p>
                                We are in the era of SPAs, JavaScript web frameworks have been on the high rise lately these years. They embody the use of client-side rendering. The components and pages that make up our website are all downloaded and the web content is generated via JavaScript in the browser. This is great because page navigations are smooth and very fast without any server request. But this comes at a great cost when our application becomes large, we have to download the whole bundle and generate the UI content, which really has a great impact on the load time and performance.
                            </p>
                            <p>
                                Next.js was built to solve this issue. Nextjs is an open-source web framework that lets us build server-rendered and static web applications using React.
                            </p>
                            <p>
                                Next.js makes it possible to build a server-rendered React.js app, the content is rendered on the server before being served to the browser. This does away with the client-generated content, anyway Nextjs has an option for us to enable the client-side content generation.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-10 text-white justify-center align-middle text-center">
                        <h2 className='text-xl'>What is NextJS Authentication ?</h2>
                        <div className="flex flex-row flex-wrap gap-6 justify-center align-middle text-center">
                            <p>
                                Authentication requires the info of a user, and then allows the user access to the application. Authentication is one of the common features of an application, this depends if we want our users authenticated by they can use our app.
                            </p>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default page