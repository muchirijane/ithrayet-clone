import { gql } from "@apollo/client";

export const GET_GALLERY_DATA = gql`
  query ($locale: String!) {
    articles(locale: $locale) {
      title
      slug
      cover {
        url
        alternativeText
      }
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
