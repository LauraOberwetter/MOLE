const express = require("express");
const router = express.Router();
const { User } = require("../../models");

// ******
// Begin added code for login/logout

// register User
router.post("/", async (req, res) => {
  console.log(req.body);
  // check to see if user is unique
  const userEmailExists = await User.findOne({ email: req.body.email });
  if (userEmailExists === null) {
    console.log(userEmailExists);
    return res.status(401).send({ error: "Email already exists" });
  }
  const usernameExists = await User.findOne({ username: req.body.username });
  if (usernameExists === null) {
    console.log(usernameExists);
    return res.status(401).send({ error: "Username already exists" });
  }

  User.create(req.body)
    .then((userData) => {
      console.log(userData);
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: "You are now registered!" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.findOne({
      where: { username: req.body.data.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.data.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in!" });
    });
    console.log("You are now logged in!");
    console.log(userData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.post("/logout", (req, res) => {
  console.log(req, "here");
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({});
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
