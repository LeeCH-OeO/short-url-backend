import mongoose from "mongoose";
import "dotenv/config";
import { UrlSchema } from "./urlSchema.js";
const mongoDbUrl = process.env.MONGO_URL;
mongoose.connect(mongoDbUrl);
async function dbSaveUrl(originUrl, shortId) {
  const shortUrl = new UrlSchema({
    originUrl: originUrl,
    shortId: shortId,
  });
  const res = await shortUrl.save();
  console.log(res);
}
async function dbQueryUrl(shortId) {
  const result = await UrlSchema.findOne({ shortId: shortId });
  if (result) {
    return result.originUrl;
  } else {
    console.log("not found");
    return false;
  }
}
export { dbSaveUrl, dbQueryUrl };
