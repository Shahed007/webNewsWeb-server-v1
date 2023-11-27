const express = require("express");
const connectDB = require("./db/connectDB");
const applyMiddleWare = require("./middlewares/applyMiddleWare");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const user = require("./routers/users");
const publisher = require("./routers/publisher");

applyMiddleWare(app);

app.use(user);

app.use(publisher);

app.get("/health", (req, res) => {
  res.send("my webNewsWaveDB server is ruining");
});

app.all("*", (req, res, next) => {
  const error = new Error(`the requested url is invalid :${req.url}`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`my server is ruining prot ${port}`);
  });
};

main();
