import { gql } from "@apollo/client";
import { IMAGES } from "./fragments/Images";
import { IMAGES_WITH_TITLE } from "./fragments/ImagesWithTitle";
import { SEO } from "./fragments/SEO";

export const GET_EXPERIENCE_DATA = gql`
  query ($slug: String!, $locale: String!) {
    projects(where: { slug_eq: $slug }, locale: $locale) {
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
          }
          description
          quoteWithText_title: title
        }

        ... on ComponentStandardArticleBlocksCenteredQuote {
          __typename
          centeredQuote: quote {
            artistName
            title
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
              caption
              arabic_caption
              selectedArtist
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
            title
            image {
              url
              alternativeText
              caption
              arabic_caption
              selectedArtist
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
      seo {
        metaTitle
        metaDescription
        metaKeywords
        metaImage {
          width
          height
          alternativeText
          url
        }
      }
      published_at
      title
      color
      date
      cover {
        alternativeText
        url
      }
      slug
      quote
      postCard {
        title
        description
      }

      content {
        content
      }
      showcase {
        title
        description
        images {
          image {
            url
            alternativeText
            caption
            arabic_caption
            selectedArtist
          }
        }
      }
      bottomImages {
        image {
          url
          alternativeText
          caption
          arabic_caption
          selectedArtist
        }
      }
    }
  }

  ${IMAGES}
  ${IMAGES_WITH_TITLE}
`;

export const GET_EXPERIENCE_SLUGS = gql`
  query {
    projects {
      slug
    }
  }
`;

export const GET_JOINEXPERIENCE_DATA = gql`
  query (
    $locale: String!
    $dateFrom: String
    $dateTo: String
    $alphabets: [JSON]
  ) {
    joinExperience(locale: $locale) {
      seo {
        metaTitle
        metaDescription
        metaKeywords
        metaImage {
          width
          height
          alternativeText
          url
        }
      }
      centerLogo {
        url
      }
      centerText
    }
    projects(
      locale: $locale
      where: {
        _and: [
          { _or: $alphabets }
          { _and: [{ date_gte: $dateFrom }, { date_lte: $dateTo }] }
        ]
      }
    ) {
      title
      quote
      cover {
        url
        alternativeText
      }
      slug
      date
    }
    newsLetterForm(locale: $locale) {
      title
      description
      thankYou {
        title
        description
      }
    }
    collaborateWithUs(locale: $locale) {
      title
      description
      thankYou {
        title
        description
      }
    }
  }
`;

export const GET_NEXT_PROJECT = gql`
  query ($where: JSON, $limit: Int, $locale: String!) {
    projects(where: $where, limit: $limit, locale: $locale) {
      slug
      title
    }
  }
`;
