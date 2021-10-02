const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/:id", (req, res) => {
  res.sendFile(__dirname + "/dist/" + req.params.id);
});

app.listen(5000, () => {
  console.log("Running on http://localhost:5000/");
});
