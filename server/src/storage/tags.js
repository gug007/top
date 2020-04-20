import { Tag } from "../models";

export const get = ({ id }) => {
  if (id) {
    return Tag.findOne({ where: { id } });
  }

  return Tag.findAll({ order: [["id", "DESC"]] });
};

export const post = ({ userId, name }) => {
  return Tag.create({ userId, name });
};
