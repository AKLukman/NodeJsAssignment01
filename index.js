const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
// const toolsRoutes = require("./routes/v1/tools.user.js");
const errorHandler = require("./middleware/errorHandler");
const viewCount = require("./middleware/veiwCount");
const user = require("./routes/v1/route.user");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// Apply the rate limiting middleware to all requests
// app.use(limiter);

// total appliction er view count korbe
// app.use(viewCount);

// Apply the rate limiting middleware to all requests
// app.use(limiter);

dbConnect();

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/public/test.html");
  res.render("home.ejs", {
    id: 5,
    user: {
      name: "test",
    },
  });
});

app.use("/api/v1/user", user);

app.get("/", (req, res) => {
  // res.send("Hello World");
  // res.sendFile(__dirname + "/public/test.html");
  res.render("home.ejs", {
    id: 5,
    user: {
      name: "test",
    },
  });
});

app.all("*", (req, res) => {
  res.send("NO route found.");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// jeta errorHnadle korte parbe na oita dia handle krbo/jmon server side

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
