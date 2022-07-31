import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/about", homeController.getAbout);
  return app.use("/", router);
};

export default initWebRoute;
