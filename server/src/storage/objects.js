import model from "../models";
import * as s3 from "./s3";

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

export const post = async ({ tagId, name, userId, imageUrl }) => {
  const object = await model.Object.create({ name, userId });
  await model.ObjectsTag.create({ objectId: object.id, tagId, userId });
  const image = await model.ObjectImage.create({
    objectId: object.id,
    userId,
    name: ""
  });

  if (imageUrl) {
    const getPath = imageName =>
      `obj/${object.id}/${image.id}/${imageName}.jpg`;
    s3.post(imageUrl, getPath("ori"), 1024);
    s3.post(imageUrl, getPath("320"), 320);
    s3.post(imageUrl, getPath("100"), 100);
  }

  return object;
};
