const express = require("express");
const router = express.Router();
const itemModel = require('../models/itemModel')

//GET ALL PIZZA || @GET REQUEST
router.get("/getAllItems", async (req, res) => {
    try {
      const items = await itemModel.find({});
      res.send(items);
    } catch (error) {
      res.json({ message: error });
    }
  });
  module.exports = router;