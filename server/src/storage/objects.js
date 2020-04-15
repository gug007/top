import model from "../models";

export const get = async ({ id }) => {
  const ids = await model.ObjectsTag.findAll({
    where: { tagId: id },
  }).map((v) => v.objectId);

  return model.Object.findAll({
    where: { id: ids },
  });
};

export const post = async ({ title }) => {
  return await model.ObjectsTag.create(
    { title },
    {
      // include: includeMessage
    }
  );
};
