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
      page_link
      external_link
      link_type
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
