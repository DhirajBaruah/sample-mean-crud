const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new mongoose.Schema({
  first_name:String,
  last_name:String,
  age:Number,
  gender:String,
  mobile_number:Number,
  createdOn: Date,
});

mongoose.model("users", usersSchema);
