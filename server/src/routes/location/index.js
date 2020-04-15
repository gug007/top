import * as storage from "../../storage/geoname";

export const getCities = async (req, res) => {
  const { countryId } = req.params;
  try {
    res.send(await storage.get({ countryId }));
  } catch (e) {
    res.status(500).send({ error: "Error" });
  }
};
