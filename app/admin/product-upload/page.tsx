"use client";
import LoadingBar from "@/components/LoadingBar";
import { formData } from "@/type/testimonial";
import Image from "next/image";
import React, { useState } from "react";

// interface ProductUploadFormProps {
//   onClose: () => {};
// }

const ProductUploadForm= () => {
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
        image3: { url: "", public_id: "" },
        image4: { url: "", public_id: "" },
      });
    
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
            className="form-checkbox"
          />
          <span className="ml-2 text-sm text-gray-700">
            Feature this product
          </span>
        </label>

        <div className="flex flex-col mt-6">
          <div className="text-lg font-semibold text-gray-800">Images</div>
          <div className="flex flex-wrap justify-center gap-10 my-11">



            {/* {["image1", "image2", "image3", "image4"].map((name, index) => (
              <div key={name} className="relative w-[220px] mx-h-[220px]">
                {formData[name as keyof typeof formData]. ? (
                  <>
                    {loadingImage1 && name === "image1" && (
                      <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
                        <LoadingBar />
                      </div>
                    )}
                    {loadingImage2 && name === "image2" && (
                      <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
                        <LoadingBar />
                      </div>
                    )}
                    {loadingImage3 && name === "image3" && (
                      <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
                        <LoadingBar />
                      </div>
                    )}
                    {loadingImage4 && name === "image4" && (
                      <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
                        <LoadingBar />
                      </div>
                    )}
                    <div className="relative w-full">
                      <Image
                        src={formData[name as keyof typeof formData].url}
                        alt={`Uploaded Image ${index + 1}`}
                        width={220}
                        height={220}
                        objectFit="cover"
                        className="rounded border"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteImage(
                            formData[name as keyof typeof formData].public_id,
                            name
                          )
                        }
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full focus:outline-none"
                      >
                        ✕
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {loadingImage1 && name === "image1" && (
                      <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
                        <LoadingBar />
                      </div>
                    )}
                    {loadingImage2 && name === "image2" && (
                      <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
                        <LoadingBar />
                      </div>
                    )}
                    {loadingImage3 && name === "image3" && (
                      <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
                        <LoadingBar />
                      </div>
                    )}
                    {loadingImage4 && name === "image4" && (
                      <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
                        <LoadingBar />
                      </div>
                    )}
                    <div className="flex flex-col items-center bg-slate-300 pt-2 rounded rounded-t-lg">
                      <label className="mb-2 text-base text-gray-600 text-[13px] font-thin">
                        Sample-{index + 1}
                      </label>
                      <button
                        type="button"
                        onClick={() => document.getElementById(name)?.click()}
                        className="flex items-center justify-center w-full h-[220px] bg-gray-100 border border-dashed border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
                      >
                        <span className="text-3xl text-gray-500">+</span>
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        name={name}
                        id={name}
                        onChange={(e) => handleImageUpload(e, name)}
                        className="hidden"
                      />
                    </div>
                  </>
                )}
              </div>
            ))} */}






          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Upload Product
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default ProductUploadForm;
