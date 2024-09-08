import { connectToDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await connectToDB();
        
        // Use req.nextUrl to access URL parameters
        const { searchParams } = new URL(req.nextUrl.href);
        const id = searchParams.get("id");
        
        if (!id) {
            return NextResponse.json({
                error: 'Product ID is required',
            }, { status: 400 });
        }
        
        const singleProduct = await Product.findById(id);

        if (!singleProduct) {
            return NextResponse.json({
                error: 'Product not found',
            }, { status: 404 });
        }
        
        return NextResponse.json({ singleProduct }, { status: 200 });
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json({
            error: 'Error fetching product',
        }, { status: 500 });
    }
};
