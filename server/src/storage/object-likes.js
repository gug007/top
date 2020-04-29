import model, { ObjectLike } from "../models";

export const post = async ({ userId, objectId, tagId }) => {
  const likes = await model.ObjectLike.findAll({
    where: { userId, objectId, tagId }
  });

  if (likes.length > 0) {
    await ObjectLike.destroy({ where: { userId, objectId, tagId } });
    return { status: "deleted" };
  }
  const like = await ObjectLike.create({ userId, objectId, tagId });
  return { status: "added", like };
};
