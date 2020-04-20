import { post } from "./request";
import emptyDirectory from "../storage/s3/emptyDirectory";
import { BUCKET_NAME } from "../storage/s3/s3";

const userId = 1;

const cryptocurrencies = [
  ["Bitcoin", "https://bitcoin.org/img/icons/opengraph.png"],
  [
    "Ethereum",
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdavealtavilla%2Ffiles%2F2017%2F06%2FEthereum-logo-720px.jpg"
  ],
  [
    "EOS",
    "https://www.blockmedia.co.kr/wp-content/uploads/2019/04/eos_logo.jpg"
  ]
];

const tags = [
  ["cryptocurrencies", cryptocurrencies],
  ["phones", [["Iphone 11 Pro"], ["Samsung Galaxy s20"]]],
  ["models"]
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
