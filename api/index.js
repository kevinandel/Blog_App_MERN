const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "1rwefgt345tfwt452";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://kevinandel11:Giftofgod11@cluster0.1xnb7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await UserModel.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await UserModel.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({ username, id: userDoc.id }, secret, {}, (error, token) => {
        if (error) throw error;
        res.cookie("token", token).json("OK");
      });
    } else {
      res.status(400).json("Wrong credentials.");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(4000);