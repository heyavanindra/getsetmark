import mongoose, { Schema } from "mongoose";

export interface Message extends Document {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const MessageSchema: Schema<Message> = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
});

const Messagemodel =
  (mongoose.models.message as mongoose.Model<Message> ||
  mongoose.model<Message>("Message", MessageSchema));

export default Messagemodel;
