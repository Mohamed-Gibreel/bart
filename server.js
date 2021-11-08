const express = require("express");
const app = express();
const initRoutes = require("./routes/web");
let port = 5000;

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
