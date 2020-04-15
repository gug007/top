import { Message, User } from "../models";

const includeUser = [
  {
    model: User
  }
];

export const get = async ({ id }) => {
  return await Message.findAll({
    where: { chatId: id },
    include: includeUser
  });
};

export const post = async ({ body, chatId, userId }) => {
  return await Message.create(
    { body, chatId, userId },
    {
      include: includeUser
    }
  );
};
