const mogoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const connectDb = require("./config/config");
const Item = require("./models/itemModel");
const Items = require("./data/items-data");

//config dot env and mongodb conn file
dotenv.config();
connectDb();

//import data
const importData = async () => {
    try {
      await Item.deleteMany();
      const sampleData = Items.map((item) => {
        return { ...item};
      });
      await Item.insertMany(sampleData);
      console.log("DATA Imported".bgGreen.white);
      process.exit();
    } catch (error) {
      console.log(`${error}`.bgRed.white);
      process.exit(1);
    }
  };

  const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}