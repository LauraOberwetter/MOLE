const express = require("express");
const path = require("path");
const routes = require("./routes");
const sequelize = require("./config/connection");
const cors = require("cors");
const session = require("express-session");
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    name: "sid",
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SECRET,
    cookie: {
      maxAge: ONE_WEEK,
      // sameSite: false,
      secure: false,
    },
  })
);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build"));
// });

// cross origin resource sharing
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}!`);
  });
});
