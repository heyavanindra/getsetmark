import mongoose from "mongoose";
import { dbconnect } from "@/lib/dbconnect";
import Messagemodel from "@/model/User";

export async function POST(request:Request) {
    await dbconnect()
  try {
    const {name, phone, email, message}=   await request.json()
  const Message = new Messagemodel({
    name,
    phone,
    email,
    message
  })

  await Message.save()

  return Response.json({
    success:true,
    message:"thank you for choosing us"
  },{status:200})
  } catch (error) {
    console.log("error happened");
    
    
  }

}

