const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Secure pass backend listening for requests!");
});

app.post("/login", (req, res) => {
  res.send("Coming soon!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
