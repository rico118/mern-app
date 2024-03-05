const mongoose = require("mongoose");
const express = require("express");
const route = require("./routes/route.js");
const app = express();
const cors = require("cors");
mongoose.connect("mongodb://mongo:27017/restful_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => console.log("DB Connection success"));
app.use(cors(
  { origin: 'http://127.0.0.1:4173',}
));
app.use(express.json());

app.use("/product", route);
app.listen(4000, () => {
  console.log("server running on port 4000");
});
