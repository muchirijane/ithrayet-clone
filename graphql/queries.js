import { gql } from "@apollo/client";

const GET_HOMEPAGE_DATA = gql`
  query {
    loaderImage {
      images {
        url
      }
    }
    editions {
      title
      cover {
        url
      }
      publishedDate
    }
    artists {
      firstName
      lastName
      signature {
        url
      }
      profileImage {
        url
      }
    }
  }
`;

export { GET_HOMEPAGE_DATA };
