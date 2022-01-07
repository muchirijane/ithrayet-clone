export const getImageLink = (image, size = "medium") => {
  console.log(image?.formats?.[size]?.url, "image?.formats?.[size]?.url");
  return image?.formats?.[size]?.url ? image.formats[size].url : image?.url;
};
