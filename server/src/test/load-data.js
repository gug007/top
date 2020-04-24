import { post } from "./request";
import emptyDirectory from "../storage/s3/emptyDirectory";
import { BUCKET_NAME } from "../storage/s3/s3";
import cryptocurrencies from "./data/cryptocurrencies";
import UFCFighters from "./data/UFCFighters";

const userId = 1;

const tags = [
  ["Cryptocurrencies", cryptocurrencies],
  ["UFC fighters", UFCFighters]
];

function createObjects(tagId, objects) {
  return Promise.all(
    objects.map(([name, imageUrl]) =>
      post("http://localhost:4010/objects", {
        body: {
          tagId,
          name,
          userId,
          imageUrl
        }
      })
    )
  );
}

const createtags = async () => {
  await emptyDirectory(BUCKET_NAME, "obj");

  tags.map(async ([name, objects]) => {
    const tag = await post("http://localhost:4010/tags", {
      body: {
        name,
        userId
      }
    });
    if (objects) {
      return await createObjects(tag.id, objects);
    }
  });
};

createtags();
