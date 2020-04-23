import fetch from "isomorphic-unfetch";
import sharp from "sharp";

export const fetchImage = async url => {
  const response = await fetch(url);
  return await response.buffer();
};

export const resize = (imageData, width) =>
  sharp(imageData)
    .resize(width, null, {
      withoutEnlargement: true
    })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .jpeg();
