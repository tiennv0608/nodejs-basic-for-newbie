const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World! với tôi");
});

app.get("/about", (req, res) => {
  res.send(`I'm Việt Tiến`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
