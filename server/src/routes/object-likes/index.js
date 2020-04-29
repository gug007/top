import * as storage from "../../storage/object-likes";

export const post = async (req, res) => {
  try {
    res.send(await storage.post(req.body));
  } catch (e) {
    res.status(500).send({ error: "Error post tag" });
  }
};
