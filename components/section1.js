import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";


export default function section1() {

  const {data,isLoading,isError} = fetcher('api/trending')
  if (isLoading) return <Spinner></Spinner>

  if (isError) return <Error></Error>

  SwiperCore.use([Autoplay]);

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 2000,
          }}
        >
        
       
          {
          data.map((value,index)=>(
            <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
          ))
        } 
          ...
        </Swiper>
      </div>
    </section>
  );
}

function Slide({data}) {
  const {id,title,subtitle,category,img,description,published,author} = data;
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <a><Image  src={img||"/"} width={600} height={600} /></a>
        </Link>
        
      </div>
      <div className="info">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">
            {category||"Unknow"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-600 hover:text-gray-800"> - {published||"Unknow"}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
            {title||"Title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
        {subtitle}
        </p>
        {author ? <Author {...author}></Author>:<></>} 
      </div>
    </div>
  );
}
