const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(require("./routes/send.js"));
app.listen(process.env.PORT || 5000, () => console.log("Server Running"));