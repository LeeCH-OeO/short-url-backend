import express, { json } from "express";
import { nanoid } from "nanoid";
import cors from "cors";
import { dbSaveUrl, dbQueryUrl } from "./db/url.js";
const app = express();
app.use(cors());

app.use(express.json());
const generateID = () => {
  const uniqueId = nanoid(8);
  return uniqueId;
};

app.get("/", (req, res) => {
  res.redirect(301, "https://short.ch-lee.xyz/");
});
app.get("/:id", async (req, res) => {
  const urlID = req.params.id;
  const result = await dbQueryUrl(urlID);
  if (result) {
    res.redirect(301, result);
  } else {
    res.redirect(301, "https://short.ch-lee.xyz/");
  }
});
app.post("/api/short", (req, res) => {
  const reqUrl = req.body.url;

  console.log(reqUrl);
  const id = generateID(8);
  dbSaveUrl(reqUrl, id);
  res.status(200).json({ id: id });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Link start!");
});
