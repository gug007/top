import express from "express";
import * as tags from "./tags";
import * as user from "./user";
import * as objects from "./objects";
import * as objectLikes from "./object-likes";
import "./user/passport";

const router = express.Router();

router.use((req, res, next) => {
  req.queryAndBody = Object.assign({}, req.body, req.query);
  next();
});

router.post("/signup", user.signup);
router.post("/login", user.login);
router.post("/guest", user.guest);
router.get("/users", user.get);
router.get("/auth", user.auth, user.getUser);

router.get("/tags/:id", tags.get);
router.get("/tags", tags.get);
router.post("/tags", tags.post);
router.get("/objectsByTagId/:id", objects.get);
router.post("/objects", objects.post);

router.post("/objects/like", objectLikes.post);

/*
router.get("/messages/:id", messages.get);
router.post("/messages", messages.post);
router.get("/chats", user.auth, chats.get);
router.post("/chats", chats.post);
router.get("/location/cities/:countryId", location.getCities);
*/

export default router;
