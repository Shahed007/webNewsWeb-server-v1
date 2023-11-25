const express = require("express");
const cors = require("cors");
const cookie_parser = require("cookie-parser");
const { LOCAL_CLIENT, CLIENT } = require("../config/default");

const applyMiddleWare = (app) => {
  app.use(
    cors({
      origin: [LOCAL_CLIENT, CLIENT],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookie_parser());
};

module.exports = applyMiddleWare;
