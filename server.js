require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT;

//middleware
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index.js"));

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
