const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.json({
    message: "Secure pass backend listening to requests",
    time: new Date().toISOString(),
    ip: ip,
  });
});

app.post("/login", (req, res) => {
  res.send("Coming soon!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
