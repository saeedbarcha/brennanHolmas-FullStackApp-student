require("dotenv")
var express = require("express");
var router = express.Router();

const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/* GET users listing. */

router.get("/", async (req, res) => {
  const getAllUsers = await User.find();
  if (getAllUsers[0] === undefined) {
    res.status(400).json({ message: "No any User registered." });
    // console.log("no any user register yet")
  } else {
    res.status(200).json(getAllUsers);
    console.log(getAllUsers);
  }
});

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.json({ message: "please fill the required fields" });
  } else if (!email.endsWith("@gmail.com")) {
    return res.json({ message: "Email format is Invalid" });
  } else {
    try {
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        return res.status(400).json({ message: "User already Exist" });
      } else {
        const bpassword = await bcrypt.hash(password, 10);
        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: bpassword,
        });
        console.log(bpassword);
        await user.save();
        res.status(201).json({ message: "User registered successfully" });

      }
      
    } catch (err) {
      console.log(err);
    }
  }
});


router.post("/login", async(req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "please fill the required" });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ message: "invalid credintials" });
      } else {
        const token = await jwt.sign(
          { _id: userLogin._id },
           "jshjh87987483urudesuhfehjfjdh4789748374bdnsdjhfbhd4y83484",
        
          {
            expiresIn: "1 year",
          }
        );
        // console.log(token);
        res.status(200).json({
          message: "User signed in!",
          _id: userLogin._id,
          token: token
        });
      }
   
    } else {
      res.status(400).send("invalid crediantles");
    }
  } catch (err) {
    console.log(err);
  }

});

router.get("/foo", (req, res) => {
  res.send("respond with foo");
});

module.exports = router;
