import Image from "next/image";
import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Product 1", image: "/images/foodZone.png", price: "$50" },
  { id: 2, name: "Product 2", image: "/images/foodZone.png", price: "$75" },
  { id: 3, name: "Product 3", image: "/images/foodZone.png", price: "$100" },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16  ">
      <div className="mx-auto max-w-7xl ">
        <h2 className="text-3xl font-bold text-white text-shadow  text-center themeColor1 border w-72 mx-auto py-2  border-white  px-2 border-dashed">
          Featured Products
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-3 border border-gray-400 ">
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="mb-4 "
                />{" "}
              </div>
              <div className="bg-gray-800 p-4 my-2 rounded">
                <h3 className="text-lg font-bold text-gray-100">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
