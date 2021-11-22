const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const members = require("./Members");
//const logger = require("./middleware/logger");

const app = express();
const PORT = process.env.PORT || 5000;

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Homepage",
    content: "Welcome to the homepage",
    members: members,
  })
);

// // Set static folder
// app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
