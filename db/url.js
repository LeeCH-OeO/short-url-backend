import mongoose from "mongoose";
import { UrlSchema } from "./urlSchema.js";
mongoose.connect(process.env.MONGO_URL);
async function dbSaveUrl(originUrl, shortId) {
  const shortUrl = new UrlSchema({
    originUrl: originUrl,
    shortId: shortId,
  });
  const res = await shortUrl.save();
}
async function dbQueryUrl(shortId) {
  const result = await UrlSchema.findOne({ shortId: shortId });
  if (result) {
    return result.originUrl;
  } else {
    return false;
  }
}
export { dbSaveUrl, dbQueryUrl };
