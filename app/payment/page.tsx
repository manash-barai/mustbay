"use client";
import React, { useState } from "react";

const page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    whatsappNumber: "",
    fullName: "",
    pinCode: "",
    houseNo: "",
    fullAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleWhatsappSubmit = (e) => {
    e.preventDefault();
    // Call server with WhatsApp number
    console.log("WhatsApp Number:", formData.whatsappNumber);
    // On success, proceed to next step
    setCurrentStep(2);
  };

  const handleDeliverySubmit = (e) => {
    e.preventDefault();
    // Call server with delivery details
    console.log("Delivery Details:", formData);
    // On success, proceed to next step
    setCurrentStep(3);
  };

  const handlePlaceOrder = () => {
    // Call server to place order with payment details
    console.log("Order placed");
  };

  return (
    <div className="w-full py-5 h-full">
      {/* Progress Line */}
      <ul className="line flex w-96 mx-auto gap-32 relative outline-offset-8">
        <div className="absolute top-4 h-1 w-full bg-black"></div>
        <li
          className={`w-11 h-10 border border-black rounded-full p-3 flex justify-center items-center z-10 ${
            currentStep >= 1 ? "bg-black text-white" : "bg-white"
          }`}
        >
          1
        </li>
        <li
          className={`w-11 h-10 border border-black rounded-full p-3 flex justify-center items-center z-10 ${
            currentStep >= 2 ? "bg-black text-white" : "bg-white"
          }`}
        >
          2
        </li>
        <li
          className={`w-11 h-10 border border-black rounded-full p-3 flex justify-center items-center z-10 ${
            currentStep >= 3 ? "bg-black text-white" : "bg-white"
          }`}
        >
          3
        </li>
      </ul>

      {/* Steps */}
      <section className="container flex-1 px-80 mt-11">
        {currentStep === 1 && (
          <div className="login flex-1">
            <form onSubmit={handleWhatsappSubmit}>
              <div className="w-full">
                <p>Enter WhatsApp Number</p>
                <input
                  type="number"
                  name="whatsappNumber"
                  placeholder="Enter WhatsApp Number"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="w-full my-2 py-2 px-7 border border-slate-800"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-center text-white py-2 bg-slate-800"
              >
                Continue
              </button>
            </form>
          </div>
        )}

        {currentStep === 2 && (
          <div className="flex justify-center items-center min-h-screen">
            <form
              onSubmit={handleDeliverySubmit}
              className="bg-white w-full p-4 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                Delivery Form
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pinCode"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Pin Code
                </label>
                <input
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="houseNo"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  House No
                </label>
                <input
                  type="text"
                  id="houseNo"
                  name="houseNo"
                  value={formData.houseNo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fullAddress"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Full Address
                </label>
                <textarea
                  id="fullAddress"
                  name="fullAddress"
                  value={formData.fullAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Continue
              </button>
            </form>
          </div>
        )}

        {currentStep === 3 && (
          <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
              <h2 className="text-2xl font-bold mb-6">
                Payment and Billing Details
              </h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    className="mr-2"
                    defaultChecked
                  />
                  <label htmlFor="cod" className="text-gray-700">
                    Cash on Delivery (COD)
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Bill Details</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Items - 2</span>
                  <span className="text-gray-700">$100</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Item Total Price</span>
                  <span className="text-gray-700">$200</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Sale Discount</span>
                  <span className="text-gray-700">-$20</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Delivery Fee</span>
                  <span className="text-gray-700">$10</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span>$190</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Total Amount: $190</span>
                <button
                  onClick={handlePlaceOrder}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default page;
