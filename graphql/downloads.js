import { gql } from "@apollo/client";

export const GET_DOWNLOAD_ISSUES_DATA = gql`
  query ($locale: String!) {
    editions(locale: $locale) {
      slug
      title
      cover {
        url
        alternativeText
      }
      type {
        value
        number
      }
      PDF {
        url
      }
    }
    newsLetterForm {
      title
      description
    }
  }
`;
