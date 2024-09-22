import mongoose from "mongoose";

export async function dbconnect() {
   const db= await mongoose.connect('mongodb+srv://newUser:6u3TMX7PiRuQooEE@mycluster.gn80new.mongodb.net/getsetmarkDB')
   console.log("loging from db", db);
   

}