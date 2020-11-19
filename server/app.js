const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const { MONGO_URL } = require("./util/secrets");

//db connection
mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
  }).then( () => {
    console.log("DB CONNECTED")
}).catch( err => {
    console.log("ERROR CONNECTING ", err)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});


// import app routes
const personsRoutes = require("./routes/persons");

// app routes
app.use("/person", personsRoutes);


module.exports = app;
