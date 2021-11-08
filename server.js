const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

app.use(express.static(path.join(__dirname, "app")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "app", "index.html"));
});

app.listen(port, () => {
  console.log(`Express app listening at http://lnode server.jsocalhost:${port}`);
});