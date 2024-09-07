import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import { sendWhatsAppMessage } from "@/utils/sendWhatsAppMessage";
import { NextRequest, NextResponse } from "next/server";




export const POST = async (req: NextRequest) => {
  function generateOtp(): string {
    const otp = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000 and 9999
    return otp.toString();
  }

  try {
    await connectToDB(); // Ensure database connection

    const body = await req.json();
    const otp = generateOtp();

    const findUser=await User.findOne({phoneNumber:body.phoneNumber})
    
    if(findUser){
        
    }
    
    const newUser = new User({
      phoneNumber: body.phoneNumber,
      otpVerificationBySMS: otp,
    });

    await newUser.save(); // Save the new user to the database

    // Send the OTP via WhatsApp
    // const response = await sendWhatsAppMessage(newUser.phoneNumber, `Your OTP is ${newUser.otpVerificationBySMS}`);

    // if (response.success) {
    //   return NextResponse.json({
    //     message: 'OTP sent successfully',
    //   }, { status: 201 });
    // } else {
    //   console.error('Failed to send OTP:', response.error);
    //   return NextResponse.json({
    //     message: 'Failed to send OTP',
    //     error: response.error,
    //   }, { status: 500 });
    // }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({
      error: 'Error creating user or sending OTP',
    }, { status: 500 });
  }
};
