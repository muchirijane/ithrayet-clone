import { gql } from "@apollo/client";

export const SEARCH_RESULTS = gql`
  query ($locale: String!, $search_term: String!) {
    stories(where: { name_contains: $search_term }) {
      name
      articles {
        cover {
          url
          alternativeText
        }
      }
    }
    projects(where: { title_contains: $search_term }) {
      title
      cover {
        url
        alternativeText
      }
    }
    editions(where: { title_contains: $search_term }) {
      title
      cover {
        url
        alternativeText
      }
    }
    artists(where: { firstName_contains: $search_term }) {
      firstName
      lastName
      profileImage {
        url
        alternativeText
      }
    }
  }
`;
