import { deleteImage, uploadImage } from "@/lib/upload-image";
import { NextRequest, NextResponse } from "next/server";

export const POST=async(req:NextRequest)=>{
    

    const formData = await req.formData();
    const image = formData.get("image") as File;
    

    const data: any = await uploadImage(image, "nextjs-imagegallary");
    console.log(data);
    

    return NextResponse.json({
        url: data?.secure_url,
        public_id: data?.public_id
    }, { status: 200 });

}
export const DELETE = async (req: NextRequest) => {
    try {
        const { public_id } = await req.json();

        if (!public_id) {
            return NextResponse.json({ error: 'Public ID is required.' }, { status: 400 });
        }

        const result = await deleteImage(public_id);

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "some went wrong while uplaod file" }, { status: 500 });
    }
};