import { gql } from "@apollo/client";

export const GET_SYMBOLS_DATA = gql`
  query ($locale: String!) {
    symbols(locale: $locale) {
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
      Title
      slug
      story {
        title
        description
      }
      Inspiration {
        title
        description
        image {
          url
          alternativeText
        }
      }
      symbol {
        url
      }
      edition {
        title
        publishedDate
      }
    }
    listSymbol {
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
