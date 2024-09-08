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


// types.ts
export interface ProductImage {
  url: string;
  public_id: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  newPrice: number;
  oldPrice: number;
  extraOffer: string;
  featureProduct: boolean;
  brand: string;
  country: string;
  lifeCycle: string;
  createdAt: string;
  updatedAt: string;
  image1: ProductImage;
  image2: ProductImage;
  image3: ProductImage;
  image4: ProductImage;
}

export interface SingleProductResponse {
  singleProduct: Product;
}




export type Feedback={
  _id:string;
  name: string;
  image:ImageData;
  description: string;
  createdAt?:string
}
