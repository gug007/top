import model from "../models";

const includeImage = [
  {
    model: model.ObjectImage
  }
];

export const get = async ({ id }) => {
  const ids = await model.ObjectsTag.findAll({
    where: { tagId: id }
  }).map(v => v.objectId);
  const objects = await model.Object.findAll({
    where: { id: ids },
    include: includeImage
  });
  return objects.map(v => {
    const { ObjectImages, ...rest } = v.dataValues;
    return { ...rest, images: ObjectImages.map(im => ({ id: im.id })) };
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
