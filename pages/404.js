import React from 'react'
import Image from 'next/image'

export default function Notfound() {
  return (<div className=" flex flex-col items-center   ">
    <Image src={"/../public/images/404_Not_found.png"}width="700" height="700" />
    <h className="text-center font-bold text-5xl pt-10" >Page Not Found!</h>
  </div>)
}
