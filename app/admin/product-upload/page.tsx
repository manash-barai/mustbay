"use client";
import LoadingBar from "@/components/LoadingBar";
import { formData } from "@/type/testimonial";
import Image from "next/image";
import React, { useState } from "react";

interface ProductUploadFormProps {
  onClose: () => void;
}

const ProductUploadForm: React.FC<ProductUploadFormProps> = ({ onClose }) => {
  const [loadingImage1, setLoadingImage1] = useState<boolean>(false);
  const [loadingImage2, setLoadingImage2] = useState<boolean>(false);
  const [loadingImage3, setLoadingImage3] = useState<boolean>(false);
  const [loadingImage4, setLoadingImage4] = useState<boolean>(false);
  const [formData, setFormData] = useState<formData>({
    name: "",
    description: "",
    newPrice: 0,
    oldPrice: 0,
    extraOffer: 0,
    featureProduct: false,
    brand: "",
    country: "",
    lifeCycle: "",
   
    image1: { url: "", public_id: "" },
    image2: { url: "", public_id: "" },
 
    image3: { url: "", public_id: "" },
    image4: { url: "", public_id: "" },
    
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteImage = async (publicId: string, name: string) => {
    if (name === "image1") {
      setLoadingImage1(true);
    } else if (name === "image2") {
      setLoadingImage2(true);
    } else if (name === "image3") {
      setLoadingImage3(true);
    } else if (name === "image4") {
      setLoadingImage4(true);
    }
    
    try {
      const response = await fetch("/api/upload", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ public_id: publicId }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete image.");
      }
  
      if (name === "image1") {
        setLoadingImage1(false);
      } else if (name === "image2") {
        setLoadingImage2(false);
      } else if (name === "image3") {
        setLoadingImage3(false);
      } else if (name === "image4") {
        setLoadingImage4(false);
      }
  
      const result = await response.json();
  
      if (result) {
        setFormData((prev) => ({
          ...prev,
          [name]: {
            url: "",
            public_id: "",
          },
        }));
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };
  
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    if (name === "image1") {
      setLoadingImage1(true);
    } else if (name === "image2") {
      setLoadingImage2(true);
    } else if (name === "image3") {
      setLoadingImage3(true);
    } else if (name === "image4") {
      setLoadingImage4(true);
    }
  
    if (e.target.files && e.target.files[0]) {
      const form = new FormData();
      form.append("image", e.target.files[0]);
  
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: form,
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
  
        const result = await response.json();
  
        if (result.url && result.public_id) {
          if (name === "image1") {
            setLoadingImage1(false);
          } else if (name === "image2") {
            setLoadingImage2(false);
          } else if (name === "image3") {
            setLoadingImage3(false);
          } else if (name === "image4") {
            setLoadingImage4(false);
          }
          setFormData((prev) => ({
            ...prev,
            [name]: {
              url: result.url,
              public_id: result.public_id,
            },
          }));
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("No file selected.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const result = await response.json();
      alert("Product upload successful");

      setFormData({
        name: "",
        description: "",
        newPrice: 0,
        oldPrice: 0,
        extraOffer: 0,
        featureProduct: false,
        brand: "",
        country: "",
        lifeCycle: "",
        image1: { url: "", public_id: "" },
        image2: { url: "", public_id: "" },
        image4: { url: "", public_id: "" },
      
        image3: { url: "", public_id: "" }
       
      })
     
    
    } catch (error) {
      console.error("Error:", error);
    }
  };
 
  return (
    <div className="px-6 md:px-16 lg:px-28 w-full py-9 h-[100vh] overflow-auto scrollbar-thin">
      <h2 className="font-bold mb-4 text-2xl md:text-3xl text-slate-700">
        Upload Product
      </h2>
      <hr />
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-sm font-semibold text-slate-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                id="name"
                placeholder="Product Name"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="newPrice"
                className="mb-1 text-sm font-semibold text-slate-700"
              >
                New Price
              </label>
              <input
                type="number"
                name="newPrice"
                id="newPrice"
                value={formData.newPrice}
                placeholder="New Price"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="oldPrice"
                className="mb-1 text-sm font-semibold text-slate-700"
              >
                Old Price
              </label>
              <input
                type="number"
                name="oldPrice"
                value={formData.oldPrice}
                id="oldPrice"
                placeholder="Old Price"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="extraOffer"
                className="mb-1 text-sm font-semibold text-slate-700"
              >
                Extra Offer
              </label>
              <input
                type="number"
                name="extraOffer"
                value={formData.extraOffer}
                id="extraOffer"
                placeholder="Extra Offer"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="mb-1 text-sm font-semibold text-slate-700"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Product Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <label className="flex items-center mt-4">
          <input
            type="checkbox"
            name="featureProduct"
            checked={formData.featureProduct}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                featureProduct: e.target.checked,
              }))
            }
            className="mr-2"
          />
          Feature Product
        </label>

        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="brand"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                placeholder="Brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="country"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                id="country"
                placeholder="Country"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="lifeCycle"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Life Cycle
              </label>
              <input
                type="text"
                name="lifeCycle"
                id="lifeCycle"
                placeholder="Life Cycle"
                value={formData.lifeCycle}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

      




        <div className="flex flex-wrap justify-center gap-10 my-11">
    {/* Image 1 */}
    <div className="relative w-[220px] mx-h-[220px]">
      {loadingImage1 ? (
        <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
          <LoadingBar />
        </div>
      ) : (
        <div className="flex flex-col items-center bg-slate-300 pt-2 rounded rounded-t-lg">
          <label className="mb-2 text-base text-gray-600 text-[13px] font-thin">
            Sample-1
          </label>

          {formData.image1.url ? (
            <div className="relative w-full">
              <Image
                src={formData.image1.url}
                alt="Sample-1"
                width={220}
                height={220}
                objectFit="cover"
                className="rounded border"
              />
              <button
                type="button"
                onClick={() =>
                  handleDeleteImage(formData.image1.public_id, "image1")
                }
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full focus:outline-none"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => document.getElementById("image1")?.click()}
              className="flex items-center justify-center w-full h-[220px] bg-gray-100 border border-dashed border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
            >
              <span className="text-3xl text-gray-500">+</span>
            </button>
          )}
          <input
            type="file"
            accept="image/*"
            name="image1"
            id="image1"
            onChange={(e) => handleImageUpload(e, "image1")}
            className="hidden"
          />
        </div>
      )}
    </div>

    {/* Image 2 */}
    <div className="relative w-[220px] mx-h-[220px]">
      {loadingImage2 ? (
        <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
          <LoadingBar />
        </div>
      ) : (
        <div className="flex flex-col items-center bg-slate-300 pt-2 rounded rounded-t-lg">
          <label className="mb-2 text-base text-gray-600 text-[13px] font-thin">
            Sample-2
          </label>

          {formData.image2.url ? (
            <div className="relative w-full">
              <Image
                src={formData.image2.url}
                alt="Sample-2"
                width={220}
                height={220}
                objectFit="cover"
                className="rounded border"
              />
              <button
                type="button"
                onClick={() =>
                  handleDeleteImage(formData.image2.public_id, "image2")
                }
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full focus:outline-none"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => document.getElementById("image2")?.click()}
              className="flex items-center justify-center w-full h-[220px] bg-gray-100 border border-dashed border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
            >
              <span className="text-3xl text-gray-500">+</span>
            </button>
          )}
          <input
            type="file"
            accept="image/*"
            name="image2"
            id="image2"
            onChange={(e) => handleImageUpload(e, "image2")}
            className="hidden"
          />
        </div>
      )}
    </div>

    {/* Image 3 */}
    <div className="relative w-[220px] mx-h-[220px]">
      {loadingImage3 ? (
        <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
          <LoadingBar />
        </div>
      ) : (
        <div className="flex flex-col items-center bg-slate-300 pt-2 rounded rounded-t-lg">
          <label className="mb-2 text-base text-gray-600 text-[13px] font-thin">
            Sample-3
          </label>

          {formData.image3.url ? (
            <div className="relative w-full">
              <Image
                src={formData.image3.url}
                alt="Sample-3"
                width={220}
                height={220}
                objectFit="cover"
                className="rounded border"
              />
              <button
                type="button"
                onClick={() =>
                  handleDeleteImage(formData.image3.public_id, "image3")
                }
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full focus:outline-none"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => document.getElementById("image3")?.click()}
              className="flex items-center justify-center w-full h-[220px] bg-gray-100 border border-dashed border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
            >
              <span className="text-3xl text-gray-500">+</span>
            </button>
          )}
          <input
            type="file"
            accept="image/*"
            name="image3"
            id="image3"
            onChange={(e) => handleImageUpload(e, "image3")}
            className="hidden"
          />
        </div>
      )}
    </div>

    {/* Image 4 */}
    <div className="relative w-[220px] mx-h-[220px]">
      {loadingImage4 ? (
        <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
          <LoadingBar />
        </div>
      ) : (
        <div className="flex flex-col items-center bg-slate-300 pt-2 rounded rounded-t-lg">
          <label className="mb-2 text-base text-gray-600 text-[13px] font-thin">
            Sample-4
          </label>

          {formData.image4.url ? (
            <div className="relative w-full">
              <Image
                src={formData.image4.url}
                alt="Sample-4"
                width={220}
                height={220}
                objectFit="cover"
                className="rounded border"
              />
              <button
                type="button"
                onClick={() =>
                  handleDeleteImage(formData.image4.public_id, "image4")
                }
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full focus:outline-none"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => document.getElementById("image4")?.click()}
              className="flex items-center justify-center w-full h-[220px] bg-gray-100 border border-dashed border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
            >
              <span className="text-3xl text-gray-500">+</span>
            </button>
          )}
          <input
            type="file"
            accept="image/*"
            name="image4"
            id="image4"
            onChange={(e) => handleImageUpload(e, "image4")}
            className="hidden"
          />
        </div>
      )}
    </div>
  </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-500 text-white font-semibold rounded ml-2 hover:bg-gray-600 transition-colors duration-300"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUploadForm;
