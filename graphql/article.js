import { gql } from "@apollo/client";
import { SEO } from "./fragments/SEO";
import { IMAGES } from "./fragments/Images";
import { IMAGES_WITH_TITLE } from "./fragments/ImagesWithTitle";

export const GET_ARTICLE_DATA = gql`
  query ($slug: String!, $locale: String!) {
    articles(where: { slug_eq: $slug }, locale: $locale) {
      seo {
        ...SEO
      }
      slug
      title
      tags {
        name
        color
      }
      author {
        firstName
        lastName
      }
      timeToRead
      isFeatured
      isExclusive
      cover {
        url
        alternativeText
      }
      publishDate
      quote
      description
      Images {
        ...Images
      }
      symbol {
        symbol {
          url
        }
        slug
      }

      ArticleBlocks {
        ... on ComponentStandardArticleBlocksIntroductionSection {
          __typename
          title
          description
        }
        ... on ComponentStandardArticleBlocksQuoteWithText {
          __typename
          quoteWithText: quote {
            artistName
            title
            artist_type {
              Type
            }
          }
          description
          quoteWithText_title: title
        }

        ... on ComponentStandardArticleBlocksCenteredQuote {
          __typename
          centeredQuote: quote {
            artistName
            title
            artist_type {
              Type
            }
          }
        }
        ... on ComponentStandardArticleBlocksCenteredTextParagraph {
          __typename
          title
          description
        }
        ... on ComponentStandardArticleBlocksQuoteWithImage {
          __typename
          quoteWithImage_quote: quote {
            artistName
            title
            artist_type {
              Type
            }
          }
          capsTitle
          isSmallQuote
          quoteWithImage_image: image {
            ...Images
          }
          layout
          imageOrientation
        }

        ... on ComponentStandardArticleBlocksColumnLayoutTextWithTitles {
          __typename
          clTextWithTitle: content {
            title
            description
          }
        }
        ... on ComponentStandardArticleBlocksColumnLayoutImageText1 {
          __typename
          clImageText1_title: title
          clImageText1_description: description
          clImageText1_image: image {
            ...Images
          }
          clImageText1_type: type
          clImageText1_isCentered: isCentered
        }

        ... on ComponentStandardArticleBlocksBigImageWithTitle {
          __typename
          bigImageWT_title: title
          bigImageWT_image: image {
            ...Images
          }
        }

        ... on ComponentStandardArticleBlocksColumnLayoutTextWithoutTitles {
          __typename
          clTWoT_content: richText {
            content
          }
        }
        ... on ComponentStandardArticleBlocksImageStyleFullWidth {
          __typename
          imageFullWidth_title: title
          imageFullWidth_image: image {
            ...Images
          }
        }
        ... on ComponentStandardArticleBlocksFullWidthImage {
          __typename
          fullWidthImage_title: title
          fullWidthImage_image: image {
            ...Images
          }
          fullWidthImage_type: type
        }
        ... on ComponentStandardArticleBlocks3ColumnLayoutTextWithoutTitles {
          __typename
          cl3TWoT_content: richText {
            content
          }
        }
        ... on ComponentStandardArticleBlocksColumnLayoutText {
          __typename
          clT_content: columns {
            title
            description
          }
        }
        ... on ComponentIthraeyatArticleBlocksParallaxImageStyle {
          __typename
          parallaxImage_images: images {
            ...Images
          }
          parallaxImage_type: type

          parallaxImage_sectionTitle: sectionTitle
        }
        ... on ComponentIthraeyatArticleBlocksParallaxImageWithText {
          __typename
          parallaxImageWT_images: images {
            ...Images
          }
          title
          description

          coverImage {
            ...ImagesWithTitle
          }
        }
        ... on ComponentIthraeyatArticleBlocksImageGallerySlider {
          imageGallerySlider_images: images {
            ...Images
          }
          imageGallerySlider_type: type
          imageGallerySlider_sectionTitle: sectionTitle
          __typename
        }
        ... on ComponentIthraeyatArticleBlocksSignatureWithText {
          signatureWT_title: title
          __typename
          signatureWT_sign: signature {
            url
          }
        }
        ... on ComponentIthraeyatArticleBlocksParallaxImageLandscape {
          parallaxLS_imageTitle: imageTitle {
            image {
              url
              alternativeText
            }
            title
          }
          parallaxLS_type: type
          imageTitleDescription {
            image {
              url
              alternativeText
            }
            title
            description
          }

          __typename
        }
        ... on ComponentIthraeyatArticleBlocksTextWithSound {
          textWS_title: title
          textWS_content: content

          __typename
        }
        ... on ComponentIthraeyatArticleBlocksTiltingGallery {
          __typename
          type
          galleryImage {
            image {
              url
              alternativeText
            }
            artist {
              firstName
              lastName
              slug
            }
          }
          tiltGallery_image: image {
            ...Images
          }
        }
        ... on ComponentIthraeyatArticleBlocksImageGalleryWithTitle {
          __typename
          galleryWT_sectionTitle: sectionTitle
          galleryWT_image: images {
            ...ImagesWithTitle
          }
          galleryWT_type: type
        }
        ... on ComponentIthraeyatArticleBlocksHoverImageStyle {
          hoverImage_title: title

          creativesList {
            artist {
              firstName
              lastName
              signature {
                url
              }
              slug
            }
            title
            image {
              url
              alternativeText
            }
          }

          __typename
        }
        ... on ComponentIthraeyatArticleBlocksTiltingImageFullWidth {
          tiltImageFW_title: title
          tiltImageFW_image: images {
            ...Images
          }

          __typename
        }
        ... on ComponentIthraeyatArticleBlocksImageGallerySliderWithTitle {
          images {
            ...ImagesWithTitle
          }
          imageSliderWT_type: type
          imageSliderWT_sectionTitle: sectionTitle
          __typename
        }
        ... on ComponentIthraeyatArticleBlocksInteractiveMap {
          __typename

          map_image {
            url
            alternativeText
          }
        }
        ... on ComponentIthraeyatArticleBlocksSignatureWithoutText {
          signature {
            url
          }
          __typename
        }
      }
    }
  }
  ${SEO}
  ${IMAGES}
  ${IMAGES_WITH_TITLE}
`;

export const GET_ARTICLES_SLUGS = gql`
  query {
    articles {
      slug
    }
  }
`;
