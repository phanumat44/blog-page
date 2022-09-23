import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import { FaWikipediaW,FaSketch,FaSpotify } from "react-icons/fa";

export default function header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search...." />
        </div>
        
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            <div className="flex pl-14  flex-row items-center gap-1">
            <a href=""> <FaSpotify color="#1ED760" size={50} /></a>
            <a href="" className="font-bold  text-4xl">Spotify</a>
           
            </div>
          </Link>
        </div>
        
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            {/* <Link href={"/"}>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <>
                <ImYoutube color="#888888" />
              <500
            </Link> */}
                
     <Link href="/"><a href='/'><h1 className='text-gray-500 hover:text-[#1ED760]  font-bold text-2xl'>Home</h1></a></Link>
     <Link href="/"><a href='/'><h1 className='text-gray-500 hover:text-[#1ED760]  font-bold text-2xl'>Service</h1></a></Link>
     <Link href="/"><a href='/'><h1 className='text-gray-500 hover:text-[#1ED760]  font-bold text-2xl'>Contact</h1></a></Link>
     <Link href="/"><a href='/'><h1 className='text-gray-500 hover:text-[#1ED760]  font-bold text-2xl'>Labs</h1></a></Link>
     <Link href="/"><a href='/'><h1 className='text-gray-500 hover:text-[#1ED760]  font-bold text-2xl'>About us</h1></a></Link>
          </div>
        </div>
      </div>
    </header>
  );
}
