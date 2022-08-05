import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail/user/:userId", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:userId", homeController.getEditPage);
  router.post("/update-user", homeController.postUpdateUser);

  router.get("/about", homeController.getAbout);
  return app.use("/", router);
};

export default initWebRoute;
