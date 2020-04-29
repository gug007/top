import fs from "fs";
import model from "../models";
import * as s3 from "./s3";
import { fetchImage, resize } from "./images";

const NODE_ENV = process.env.NODE_ENV;

const size = {
  small: 100,
  medium: 320,
  big: 1024
};

const include = [
  {
    model: model.ObjectImage,
    as: "images"
  },
  {
    model: model.ObjectLike,
    as: "likes"
  }
];

export const get = async ({ id }) => {
  const ids = await model.ObjectsTag.findAll({
    where: { tagId: id }
  }).map(v => v.objectId);
  const objects = await model.Object.findAll({
    where: { id: ids },
    include
  });

  return objects.map(v => {
    const { images, ...rest } = v.dataValues;
    return {
      ...rest,
      images: images.map(im => ({ id: im.id }))
    };
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
    const imageData = await fetchImage(imageUrl);
    const getPath = imageName =>
      `obj/${object.id}/${image.id}/${imageName}.jpg`;
    if (NODE_ENV === "development") {
      await fs.promises.mkdir(`public/obj/${object.id}/${image.id}`, {
        recursive: true
      });

      resize(imageData, size.big).toFile(`public/${getPath(size.big)}`);
      resize(imageData, size.medium).toFile(`public/${getPath(size.medium)}`);
      resize(imageData, size.small).toFile(`public/${getPath(size.small)}`);
    } else {
      s3.post(resize(imageData, size.big), getPath(size.big));
      s3.post(resize(imageData, size.medium), getPath(size.medium));
      s3.post(resize(imageData, size.small), getPath(size.small));
    }
  }

  return object;
};
