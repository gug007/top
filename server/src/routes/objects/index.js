import * as storage from "../../storage/objects";

export const get = async (req, res) => {
  const { id } = req.params;
  try {
    res.send(await storage.get({ id }));
  } catch (e) {
    res.status(500).send({ error: "Error get objects" });
  }
};

export const post = async (req, res) => {
  try {
    res.send(await storage.post(req.body));
  } catch (e) {
    res.status(500).send({ error: "Error post objects" });
  }
};
