import { gql } from "@apollo/client";

export const GET_SYMBOLS_DATA = gql`
  query ($locale: String!) {
    symbols(locale: $locale) {
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
  }
`;
