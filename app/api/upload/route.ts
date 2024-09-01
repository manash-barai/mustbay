import { uploadImage } from "@/lib/upload-image";
import { NextRequest, NextResponse } from "next/server";

export const POST=async(req:NextRequest)=>{
    

    const formData=await req.formData()
    const image=formData.get("image") as unknown as File;
    const data:any=await uploadImage(image,"nextjs-imagegallary")
    return NextResponse.json({
        url:data?.secure_url,publicId:data?.public_id
    },{status:200})

}