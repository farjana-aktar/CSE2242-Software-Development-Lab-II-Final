const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
app.use(bodyParser.json());

const Cats = require("../models/catsSchema");

router.get("/", async (req, res) => {
  const Catslist = await Cats.find();
  res.send(Catslist);
});

router.get("/:catsid", async (req, res) => {
  const cats = await Cats.findById(req.params.catsid);
  res.send(cats);
});

router.put("/:catsid", async (req, res) => {
  await Cats.findByIdAndUpdate(req.params.catsid, req.body);
  res.send("Updated Cats of id : " + req.params.catsid);
});

router.post("/", async (req, res) => {
  const new_cats = new Cats(req.body);
  await new_cats.save();
  res.send("Added new cats :" + new_cats);
});

router.delete("/", async (req, res) => {
  await Cats.remove({});
  res.send("Deleted all Cats :( ");
});

router.delete("/:catsid", async (req, res) => {
  await Cats.findByIdAndDelete(req.params.catsid);
  res.send("Deleting Cat of id : ");
});

module.exports = router;
