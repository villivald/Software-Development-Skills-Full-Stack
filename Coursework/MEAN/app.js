const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

//Database Connection
mongoose.connect(config.database);

mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.database);
});

mongoose.connection.on("error", (err) => {
  console.log("Database error " + err);
});

const app = express();
const users = require("./routes/users");
const port = 3000;

//Middlewares
app.use(cors()); //CORS
app.use(express.static(path.join(__dirname, "public"))); //Serve static files
app.use(bodyParser.json()); //Body Parser
app.use(passport.initialize()); //Passport
app.use(passport.session());
require("./config/passport")(passport);
app.use("/users", users);

//Index route
app.get("/", (req, res) => {
  res.send("Invalid endpoint");
});

app.listen(port, () => console.log(`Server started on port: ${port}`));
