import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <div className="h-screen w-full bg-black ">
    <div className="h-full lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-8 items-center">
        <div
            className="flex flex-col gap-4 text-white  p-4 border border-gray-300 shadow-xl shadow-gray-400/30 rounded-xl">
            <h5 className="text-sm text-gray-500 font-semibold">GetSetMark team</h5>
            <div className="w-full flex gap-2 items-center justify-around">
                <div className="text-5xl font-semibold uppercase font-serif">Thank You</div>
                <hr className="w-[50%] h-1 rounded-full border-t-gray-500 bg-gray-500" />
            </div>

            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex accusamus sunt omnis amet nobis aut! Impedit minus consectetur quia a corporis cum id laudantium. Id distinctio et sequi optio.
            Odit obcaecati voluptatibus laudantium libero placeat rem quisquam totam illo deserunt dolores quidem consequatur accusan
            </p>

            <div className="flex gap-4 justify-center">
               <Link href={'/'}><button className="w-full px-4 py-1 border-2 border-green-500 rounded-xl">Home</button></Link> 
               
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default page