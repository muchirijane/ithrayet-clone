import { gql } from "@apollo/client";

export const GET_STORIES_DATA = gql`
  query ($locale: String!) {
    stories(locale: $locale) {
      name
      isOnlineExclusive

      articles {
        description
        tags {
          name
          color
        }
        quote
        title
        cover {
          url
          alternativeText
        }
        slug
      }
    }
    countStories: stories(where: { isOnlineExclusive_eq: true }) {
      name
    }
  }
`;

 
