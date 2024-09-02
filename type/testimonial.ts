export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  imgSrc: string;
};


export type ImageData = {
  url: string;
  public_id: string;
};



export type formData = {
  name: string;
  description: string;
  newPrice: number;
  oldPrice: number;
  extraOffer: number;
  featureProduct: boolean;
  brand: string;
  country: string;
  lifeCycle: string;
  image1: ImageData;
  image2: ImageData;
  image4: ImageData;

  image3: ImageData;
 
};

export type Product = {
  _id: string; // Add this line to include the _id field
  name: string;
  description?: string;
  newPrice: number;
  oldPrice?: number;
  extraOffer?: string;
  featureProduct: boolean;
  image1: ImageData;
  image2?: ImageData;
  image3?: ImageData;
  image4?: ImageData;
  brand?: string;
  country?: string;
  lifeCycle?: string;
  createdAt: string;  // ISO string format
  updatedAt: string;
};

export type Feedback={

  name: string;
  image:ImageData;
  description: string;
}
