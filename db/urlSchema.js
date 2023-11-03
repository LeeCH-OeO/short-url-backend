import mongoose from "mongoose";

const { Schema, model } = mongoose;
const urlShema = new Schema({ originUrl: String, shortId: String });

const UrlSchema = model("Url", urlShema);
export { UrlSchema };
