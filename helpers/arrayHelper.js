import { stripHtml } from "string-strip-html";

export const ChunkArray = (array, size) => {
  let sample_array = array;
  return [].concat.apply(
    [],
    sample_array.map(function (elem, i) {
      return i % size ? [] : [sample_array.slice(i, i + size)];
    })
  );
};

export const padLeadingZeros = (num, size) => {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};
export const StripPTags = (text) => {
  const result = stripHtml(text, {
    cb: ({ tag, rangesArr }) => {
      console.log(tag.name);
      if (["p"].includes(tag.name)) {
        rangesArr.push(tag.lastOpeningBracketAt, tag.lastClosingBracketAt + 1);
      }
    },
  }).result;
  console.log(result);
  return result;
};
export const ArticleBlocksKeyReplace = (data) => {
  data.ArticleBlocks.map((block) => {
    switch (block.__component) {
      case "ComponentStandardArticleBlocksQuoteWithText":
        ComponentTypeKey(block);

        QuoteTypeKey(block, "quoteWithText");

        TitleTypeKey(block, "quoteWithText_title");

        break;
      case "ComponentStandardArticleBlocksCenteredQuote":
        ComponentTypeKey(block);

        QuoteTypeKey(block, "centeredQuote");

        break;
      case "ComponentStandardArticleBlocksQuoteWithImage":
        ComponentTypeKey(block);
        QuoteTypeKey(block, "quoteWithImage_quote");
        ImageTypeKey(block, "quoteWithImage_image");

        break;
      case "ComponentStandardArticleBlocksColumnLayoutTextWithTitles":
        ComponentTypeKey(block);

        ContentTypeKey(block, "clTextWithTitle");

        break;
      case "ComponentStandardArticleBlocksColumnLayoutImageText1":
        ComponentTypeKey(block);

        TitleTypeKey(block, "clImageText1_title");

        DescriptionTypeKey(block, "clImageText1_description");

        ImageTypeKey(block, "clImageText1_image");

        TypesTypeKey(block, "clImageText1_type");

        IsCenteredTypeKey(block, "clImageText1_isCentered");
        break;

      case "ComponentStandardArticleBlocksBigImageWithTitle":
        ComponentTypeKey(block);

        TitleTypeKey(block, "bigImageWT_title");
        ImageTypeKey(block, "bigImageWT_image");

        break;
      case "ComponentStandardArticleBlocksColumnLayoutTextWithoutTitles":
        ComponentTypeKey(block);
        RichTextTypeKey(block, "clTWoT_content");

        break;
      case "ComponentStandardArticleBlocksImageStyleFullWidth":
        ComponentTypeKey(block);
        TitleTypeKey(block, "imageFullWidth_title");
        ImageTypeKey(block, "imageFullWidth_image");
        break;
      case "ComponentStandardArticleBlocksFullWidthImage":
        ComponentTypeKey(block);
        TitleTypeKey(block, "fullWidthImage_title");
        ImageTypeKey(block, "fullWidthImage_image");
        TypesTypeKey(block, "fullWidthImage_type");
        break;
      case "ComponentStandardArticleBlocks3ColumnLayoutTextWithoutTitles":
        ComponentTypeKey(block);
        RichTextTypeKey(block, "cl3TWoT_content");
        break;
      case "ComponentStandardArticleBlocksColumnLayoutText":
        ComponentTypeKey(block);
        ColumnsTypeKey(block, "clT_content");
        break;
      case "ComponentIthraeyatArticleBlocksParallaxImageStyle":
        ComponentTypeKey(block);
        ImagesTypeKey(block, "parallaxImage_images");
        TypesTypeKey(block, "parallaxImage_type");
        SectionTitleTypeKey(block, "parallaxImage_sectionTitle");
        break;
      case "ComponentIthraeyatArticleBlocksParallaxImageWithText":
        ComponentTypeKey(block);

        ImagesTypeKey(block, "parallaxImageWT_images");

        break;
      case "ComponentIthraeyatArticleBlocksImageGallerySlider":
        ComponentTypeKey(block);
        ImagesTypeKey(block, "imageGallerySlider_images");

        TypesTypeKey(block, "imageGallerySlider_type");
        SectionTitleTypeKey(block, "imageGallerySlider_sectionTitle");
        break;
      case "ComponentIthraeyatArticleBlocksSignatureWithText":
        ComponentTypeKey(block);

        TitleTypeKey(block, "signatureWT_title");
        SignatureTypeKey(block, "signatureWT_sign");
        break;
      case "ComponentIthraeyatArticleBlocksParallaxImageLandscape":
        ComponentTypeKey(block);
        ImageTitleTypeKey(block, "parallaxLS_imageTitle");
        TypesTypeKey(block, "parallaxLS_type");
        break;
      case "ComponentIthraeyatArticleBlocksTextWithSound":
        ComponentTypeKey(block);

        TitleTypeKey(block, "textWS_title");
        ContentTypeKey(block, "textWS_content");

        break;

      case "ComponentIthraeyatArticleBlocksTiltingGallery":
        ComponentTypeKey(block);

        ImageTypeKey(block, "tiltGallery_image");
        break;
      case "ComponentIthraeyatArticleBlocksImageGalleryWithTitle":
        ComponentTypeKey(block);

        SectionTitleTypeKey(block, "galleryWT_sectionTitle");

        ImagesTypeKey(block, "galleryWT_image");

        TypesTypeKey(block, "galleryWT_type");

        break;
      case "ComponentIthraeyatArticleBlocksHoverImageStyle":
        ComponentTypeKey(block);

        TitleTypeKey(block, "hoverImage_title");
        break;
      case "ComponentIthraeyatArticleBlocksTiltingImageFullWidth":
        ComponentTypeKey(block);
        TitleTypeKey(block, "tiltImageFW_title");
        ImagesTypeKey(block, "tiltImageFW_image");
        break;
      case "ComponentIthraeyatArticleBlocksImageGallerySliderWithTitle":
        ComponentTypeKey(block);
        TypesTypeKey(block, "imageSliderWT_type");
        SectionTitleTypeKey(block, "imageSliderWT_sectionTitle");
        break;
      case "ComponentIthraeyatArticleBlocksSignatureWithoutText":
        ComponentTypeKey(block);
        break;
      case "ComponentIthraeyatArticleBlocksInteractiveMap":
        ComponentTypeKey(block);
        break;
      case "ComponentStandardArticleBlocksIntroductionSection":
        ComponentTypeKey(block);
        break;
      case "ComponentStandardArticleBlocksCenteredTextParagraph":
        ComponentTypeKey(block);
        break;
    }
  });

  return data;
};

const ImageTitleTypeKey = (data, new_key) => {
  let value = data.imageTitle;
  delete data["imageTitle"];

  data[new_key] = value;
};

const SignatureTypeKey = (data, new_key) => {
  let value = data.signature;
  delete data["signature"];

  data[new_key] = value;
};

const SectionTitleTypeKey = (data, new_key) => {
  let value = data.sectionTitle;
  delete data["sectionTitle"];

  data[new_key] = value;
};
const ImagesTypeKey = (data, new_key) => {
  let value = data.images;
  delete data["images"];

  data[new_key] = value;
};

const ColumnsTypeKey = (data, new_key) => {
  let value = data.columns;
  delete data["columns"];

  data[new_key] = value;
};

const ImageTypeKey = (data, new_key) => {
  let value = data.image;
  delete data["image"];

  data[new_key] = value;
};

const ComponentTypeKey = (data) => {
  let type_value = data.__component;
  delete data["__component"];
  data["__typename"] = type_value;
};

const QuoteTypeKey = (data, new_key) => {
  let value = data.quote;
  delete data["quote"];

  data[new_key] = value;
};

const TitleTypeKey = (data, new_key) => {
  let value = data.title;
  delete data["title"];

  data[new_key] = value;
};

const DescriptionTypeKey = (data, new_key) => {
  let value = data.description;
  delete data["description"];

  data[new_key] = value;
};

const ContentTypeKey = (data, new_key) => {
  let value = data.content;
  delete data["content"];

  data[new_key] = value;
};

const TypesTypeKey = (data, new_key) => {
  let value = data.type;
  delete data["type"];

  data[new_key] = value;
};

const IsCenteredTypeKey = (data, new_key) => {
  let value = data.isCentered;
  delete data["isCentered"];

  data[new_key] = value;
};

const RichTextTypeKey = (data, new_key) => {
  let value = data.richText;
  delete data["richText"];

  data[new_key] = value;
};
