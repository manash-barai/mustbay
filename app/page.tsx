import BuyOption from "@/components/BuyOption";
import Quentity from "@/components/Quentity";
import Image from "next/image";
import React from "react";
import { PiCurrencyInr } from "react-icons/pi";
import { CiShare2 } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import TestimonialSlider from "@/components/Testimonial";

export default function page() {

  const testimonials = [
    {
      quote:
        "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
      name: "Rose Roberson",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=1",
    },
    {
      quote:
        "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=10",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=9",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=7",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=8",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=2",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=3",
    },
  ];
  const quentity = () => {};
  
  return (
    <div className="container mt-16 px-20 mx-auto">
      <div className="flex gap-11">
        <div className="img flex flex-1 gap-2">
          <div className="imgSort via-fuchsia-100 flex-1 flex flex-col gap-2">
            <div className="shadow relative w-full h-24">
              <Image
                className=" border p-3"
                src="/images/foodZone.png"
                objectFit="cover"
                layout="fill"
                objectPosition="center"
                quality={100}
                alt=""
              />
            </div>
            <div className="shadow relative w-full h-24">
              <Image
                className=" border p-3"
                src="/images/foodZone.png"
                objectFit="cover"
                layout="fill"
                objectPosition="center"
                quality={100}
                alt=""
              />
            </div>
            <div className="shadow relative w-full h-24">
              <Image
                className=" border p-3"
                src="/images/foodZone.png"
                objectFit="cover"
                layout="fill"
                objectPosition="center"
                quality={100}
                alt=""
              />
            </div>
            <div className="shadow relative w-full h-24">
              <Image
                className=" border p-3"
                src="/images/foodZone.png"
                objectFit="cover"
                layout="fill"
                objectPosition="center"
                quality={100}
                alt=""
              />
            </div>
          </div>
          <div className="imgBig border  w-9/12      relative rounded shadow-lg">
            <Image
              className="p-2"
              src="/images/foodZone.png"
              objectFit="contain"
              layout="fill"
              objectPosition="top"
              quality={100}
              alt=""
            />
          </div>
        </div>
        
        <div className="w-96 border rounded px-3 py-1">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-medium">Product Name</h1>
              <h2 className="text-2xl font-medium flex  items-center">
                {" "}
                <PiCurrencyInr size={27} /> 400{" "}
                <span className="ml-4 text-xl mt-1 line-through text-gray-400">
                  {" "}
                  {"<-"} <span className="ml-2"></span> 600{" "}
                </span>
              </h2>
              <p className="text-gray-400 text-[13px]">Inclusive all taxes</p>
            </div>
            <div className=" ">
              <CiShare2 size={32} />
            </div>
          </div>
          <h3 className="bg-sky-200 border inline-block border-white  px-2 border-dashed mt-2">
            Free delivery
          </h3>
          <div className="gradientBlue py-5 mt-3">
            <p className="text-center  font-semibold">Offer Section</p>
          </div>
          <div className="">
            <Quentity />
          </div>
          <div>
            <BuyOption />
          </div>
          <div className="mt-3">

          <div className="px-3 border  flex gap-2 items-center py-2 border-gray-400">
            <CiDeliveryTruck  color="white" className="bg-black rounded-full p-1" size={27} />
            <p className="text-[14px] text-gray-700">Get it delivered in 4-9 days</p>
          </div>

          <div className="px-3 border border-t-0 flex gap-2 items-center py-2 border-gray-400">
            <PiCurrencyInr color="white" className="bg-black rounded-full p-1" size={27} />
            <p className="text-[14px] text-gray-700">Get it delivered in 4-9 days</p>
          </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex gap-2 items-center ">
      <h2 className=" text-xl">Product Information :</h2>
      <ul className="flex gap-3">
        <p className="text-gray-600">Brand :  <span className="bg-sky-300 border border-dashed border-white px-3 py-1">Abc</span>  </p>
        <p className="text-gray-600">Country :  <span className="bg-sky-300 border border-dashed border-white px-3 py-1">Abc</span>  </p>
        <p className="text-gray-600">Product Type :  <span className="bg-sky-300 border border-dashed border-white px-3 py-1">Abc</span>  </p>
        <p className="text-gray-600">Life Cycle :  <span className="bg-sky-300 border border-dashed border-white px-3 py-1">Abc</span>  </p>

      </ul>


      </div>
      <div className="mt-5">
      <h2 className=" text-xl underline-offset underline-offset-8 underline">Product Description :</h2>
      <p className="mt-3 text-gray-600">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus sit culpa nobis, dolorem ad excepturi sint dolore esse. Aut cupiditate nesciunt, tempora placeat modi dolore sed nemo voluptatem porro soluta earum neque excepturi perferendis doloribus atque ex ducimus laborum facere harum fugiat a non dignissimos alias! Consequuntur sint nihil excepturi, maxime error eius assumenda minima fuga, quae nemo eaque necessitatibus! Rerum quidem repudiandae, et odit aut alias consequuntur velit perspiciatis. Impedit voluptatem et nobis quaerat repellendus corrupti architecto, ex asperiores ullam, maiores delectus sunt cumque. Laboriosam, maiores error blanditiis ducimus assumenda ea quos delectus repellendus velit libero quae soluta hic?" </p>
      </div>


      <div className="recent">
        <TestimonialSlider testimonials={testimonials}/>
      </div>
    </div>
  );
}
