import model, { Tag } from "../models";

const include = [
  {
    model: model.ObjectLike,
    as: "likes"
  }
];

export const get = ({ id }) => {
  if (id) {
    return Tag.findOne({ where: { name: id } });
  }
  return Tag.findAll({
    order: [["id", "DESC"]],
    include
  });
};

export const post = ({ userId, name }) => {
  return Tag.create({ userId, name });
};
