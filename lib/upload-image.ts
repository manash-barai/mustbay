import cloudinaryV2 from "./cloudinary";
import { rejects } from "assert";

export const uploadImage=async(file:File,folder:string)=>{

    const buffer=await file.arrayBuffer();
    const bytes=Buffer.from(buffer)

  return  new Promise(async(resolve,reject)=>{
       await cloudinaryV2.uploader.upload_stream({
            resource_type:'auto',
            folder:folder
        },async(err,result)=>{
            if(err){
                reject(err.message);
            }
            resolve(result)
        }).end(bytes)
    })

}