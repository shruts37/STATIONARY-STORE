const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
   
    prices: {
        type: String,
        required: true,
    },
    
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }//to capture time
);

const itemModel = mongoose.model("item", itemSchema);
module.exports = itemModel;