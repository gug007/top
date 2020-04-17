import express from "express";
import * as tags from "./tags";
import * as user from "./user";
import * as objects from "./objects";
import "./user/passport";

const router = express.Router();

router.use((req, res, next) => {
  req.queryAndBody = Object.assign({}, req.body, req.query);
  next();
});

router.post("/signup", user.signup);
router.post("/login", user.login);
router.get("/auth", user.auth, user.get);
router.get("/tags/:id", tags.get);
router.get("/tags", tags.get);
router.get("/objectsByTagId/:id", objects.get);

/*
router.get("/messages/:id", messages.get);
router.post("/messages", messages.post);
router.get("/chats", user.auth, chats.get);
router.post("/chats", chats.post);
router.get("/location/cities/:countryId", location.getCities);
*/

export default router;
