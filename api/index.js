import express from "express";
import mongoose from "mongoose";

// mongoose.connect("  ")

const app = express();

app.listen(3000, () => {
  console.log("server listning to 3000");
});
