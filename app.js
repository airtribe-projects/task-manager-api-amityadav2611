const express = require("express");
const app = express();
const port = 3000
const routes = require("./src/routes/index");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(routes);

app.get("/health-check", (req, res) => {
  res.send({ message: "Server Running..." });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

module.exports = app;
