"use client"
import React, { useState } from 'react';

interface ProductUploadFormProps {
    onClose: () => void;
}

const ProductUploadForm: React.FC<ProductUploadFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        newPrice: 0,
        oldPrice: 0,
        extraOffer: '',
        featureProduct: false,
        brand: '',
        country: '',
        lifeCycle: '',
        image1: null,
        image2: null,
        image3: null,
        image4: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, imageName: string) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, [imageName]: e.target.files[0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        onClose();
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Upload New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="newPrice"
                    placeholder="New Price"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="oldPrice"
                    placeholder="Old Price"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="extraOffer"
                    placeholder="Extra Offer"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        name="featureProduct"
                        onChange={(e) =>
                            setFormData(prev => ({ ...prev, featureProduct: e.target.checked }))
                        }
                        className="mr-2"
                    />
                    Feature Product
                </label>
                <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="lifeCycle"
                    placeholder="Life Cycle"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="file"
                    onChange={(e) => handleImageChange(e, 'image1')}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="file"
                    onChange={(e) => handleImageChange(e, 'image2')}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="file"
                    onChange={(e) => handleImageChange(e, 'image3')}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="file"
                    onChange={(e) => handleImageChange(e, 'image4')}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                        Upload Product
                    </button>
                    <button
                        type="button"
                        className="p-2 bg-red-600 text-white rounded hover:bg-red-500"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductUploadForm;
