import { Tag } from "../models";

/*
const includeMessage = [
  {
    model: Message,
    order: [["id", "DESC"]],
    limit: 1
  }
];
*/

export const get = ({ id }) => {
  if (id) {
    return Tag.findOne({ where: { id } });
  }

  return Tag.findAll();
};

export const post = async ({ title }) => {
  return await Tag.create(
    { title },
    {
      // include: includeMessage
    }
  );
};
