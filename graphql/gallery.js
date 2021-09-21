import { gql } from "@apollo/client";

export const GET_GALLERY_DATA = gql`
  query ($locale: String!) {
    galleries(locale: $locale) {
      title
      media {
        url
        alternativeText
      }
      externalVideoLink
    }
    listGallery(locale: $locale) {
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
    }
  }
`;
