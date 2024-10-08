const express = require("express");
const bodyParser = require("body-parser");


const { PORT } = require("./config/server.config.js");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler.js");
const connectToDB = require("./config/db.config.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "Ok" });
});
module.exports = connectToDB;
//last middleware if any error comes.
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectToDB();
  console.log("Sucessfully connected to db");

 
});
