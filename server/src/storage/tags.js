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

export const get = () => {
  console.log(Tag.findAll);
  return Tag.findAll({
    // include: includeMessage
  });
};

export const post = async ({ title }) => {
  return await Tag.create(
    { title },
    {
      // include: includeMessage
    }
  );
};
