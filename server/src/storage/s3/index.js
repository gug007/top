import sharp from "sharp";
import s3, { BUCKET_NAME } from "./s3";

const upload = async (body, imagePath) => {
  const params = {
    ACL: "public-read",
    Bucket: BUCKET_NAME,
    ContentType: "image/jpeg",
    Key: imagePath,
    Body: body
  };

  try {
    const data = await s3.upload(params).promise();
    console.log(`[S3] File uploaded successfully. ${data.Location}`);
  } catch (e) {
    console.log("[S3]", e);
  }
};

export const post = (imageData, imagePath) => upload(imageData, imagePath);
