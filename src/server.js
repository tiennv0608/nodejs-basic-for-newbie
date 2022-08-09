import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routers/web";
import initAPIRoute from "./routers/api";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);

initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
