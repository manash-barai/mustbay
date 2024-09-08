import React, { useEffect, useState } from "react";
import { PiCurrencyInr } from "react-icons/pi";
import { CiShare2 } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import Image from "next/image";
import Quentity from "@/components/Quentity";
import BuyOption from "@/components/BuyOption";
import { customareFeedback } from "@/lib/customareFeedback";

import { singleProduct } from "@/lib/singleProduct";

import SinglepageImage from "@/components/SinglepageImage";
const page = async ({ params }: { params: { product: string } }) => {
  const { product } = params; // Extract the ID from the params

  // const customarFeedbackPromise = customareFeedback();
  const singleProducts =await singleProduct({ product });
  
  // // Wait for both promises to resolve
  // const [customarFeedback, singleProducts] = await Promise.all([
  //   customarFeedbackPromise,
  //   singleProductsPromise,
  // ]);

  





  return (
    <div className=" mt-16 max-w-7xl mx-auto">
      <div className="flex gap-11">
        <div className="flex-1">
          <SinglepageImage SinglepageImage={singleProducts.singleProduct} />
        </div>

        <div className="w-96 border rounded px-3 py-1">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-medium">
                {singleProducts.singleProduct.name &&
                  singleProducts.singleProduct.name}{" "}
              </h1>
              <h2 className="text-2xl font-medium flex  items-center">
                {" "}
                <PiCurrencyInr size={27} />{" "}
                {singleProducts.singleProduct.newPrice}{" "}
                <span className="ml-4 text-xl mt-1 line-through text-gray-400">
                  {" "}
                  {"<--"} <span className="ml-2"></span>{" "}
                  {singleProducts.singleProduct.oldPrice}{" "}
                </span>
                <span className="ml-4 text-xl mt-1  text-gray-400">
                  {" "}
                  oFF <span className="ml-2"></span>{" "}
                  {((Number(singleProducts.singleProduct.oldPrice) -
                    Number(singleProducts.singleProduct.newPrice)) /
                    Number(singleProducts.singleProduct.oldPrice)) *
                    100}{" "}
                  %{" "}
                </span>
              </h2>
              <p className="text-gray-400 text-[13px]">Inclusive all taxes</p>
            </div>
            <div className=" ">
              <CiShare2 size={32} />
            </div>
          </div>
          <h3 className="themeColor1 border inline-block border-white  px-2 border-dashed mt-2 text-white">
            Free delivery
          </h3>
          <div className="themeColor1 py-5 mt-3">
            <p className="text-center  text-white  font-thin tracking-widest text-xl">
              {" "}
              {singleProducts.singleProduct.extraOffer}% Off Extra
            </p>
          </div>
          <div className="">
            <Quentity />
          </div>


          {singleProducts && (
            <div>
              <BuyOption product={singleProducts.singleProduct} />
            </div>
          )}



          <div className="mt-3">
            <div className="px-3 border  flex gap-2 items-center py-2 border-gray-400">
              <CiDeliveryTruck
                color="white"
                className="bg-black rounded-full p-1"
                size={27}
              />
              <p className="text-[14px] text-gray-700">
                Get it delivered in 4-9 days
              </p>
            </div>

            <div className="px-3 border border-t-0 flex gap-2 items-center py-2 border-gray-400">
              <PiCurrencyInr
                color="white"
                className="bg-black rounded-full p-1"
                size={27}
              />
              <p className="text-[14px] text-gray-700">
                Get it delivered in 4-9 days
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-b pb-11 border-gray-400 flex justify-center flex-col  ">
        <h2 className="text-center text-2xl text-shadow themeColor1 border border-dashed border-white inline-block mx-auto py-2 text-white drop-shadow  shadow px-3">
          Product Information{" "}
        </h2>
        <ul className="flex gap-3  justify-center mt-5 text-xl">
          <p className="text-gray-600">
            Brand :{" "}
            <span className="themeColor1 drop-shadow  shadow text-white text-shadow border border-dashed border-white px-3 py-1">
              {" "}
              {singleProducts.singleProduct.brand &&
                singleProducts.singleProduct.brand}{" "}
            </span>{" "}
          </p>
          <p className="text-gray-600">
            Country :{" "}
            <span className="themeColor1 drop-shadow  shadow text-white text-shadow border border-dashed border-white px-3 py-1">
              {" "}
              {singleProducts.singleProduct.country &&
                singleProducts.singleProduct.country}{" "}
            </span>{" "}
          </p>
          {/* <p className="text-gray-600">Product Type :  <span className="themeColor1 drop-shadow  shadow text-white text-shadow border border-dashed border-white px-3 py-1">Abc</span>  </p> */}
          <p className="text-gray-600">
            Life Cycle :{" "}
            <span className="themeColor1 drop-shadow  shadow text-white text-shadow border border-dashed border-white px-3 py-1">
              {singleProducts.singleProduct.lifeCycle &&
                singleProducts.singleProduct.lifeCycle}{" "}
            </span>{" "}
          </p>
        </ul>
      </div>
      <div className="mt-11 flex justify-center flex-col">
        <h2 className="text-center text-2xl text-shadow themeColor1 border border-dashed border-white inline-block mx-auto py-2 text-white drop-shadow  shadow px-3">
          Product Description{" "}
        </h2>
        <p className="mt-3 text-gray-600">
          {" "}
          {singleProducts.singleProduct.description &&
            singleProducts.singleProduct.description}{" "}
        </p>
      </div>

      {/* <div className="recent">
        <TestimonialSlider testimonials={customarFeedback.feedBack} />
      </div> */}
    </div>
  );
};

export default page;
