import { gql } from "@apollo/client";
import { GET_FILTER_TAGS } from "./filters";

export const GET_CREATIVES_DATA = gql`
  query ($locale: String!,$tags: [JSON]) {
    artists(locale: $locale, where :{ _and:$tags}) {
      firstName
      lastName
      signature {
        url
      }

      profileImage {
        url
        alternativeText
      }
      slug
    }
    listCreative {
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
    ${GET_FILTER_TAGS}
  }
`;

export const GET_CREATIVES_SLUGS = gql`
  query {
    artists {
      slug
    }
  }
`;

export const GET_CREATIVE_DATA = gql`
  query ($slug: String!, $locale: String!) {
    artists(where: { slug_eq: $slug }, locale: $locale) {
      firstName
      lastName
      signature {
        url
      }
      quote

      profileImage {
        url
        alternativeText
      }
      seo {
        metaTitle
        metaDescription
        metaKeywords
        trackingCode
        metaImage {
          url
          height
          width
        }
      }
      slug
      audioBio {
        description

        title
      }
      tags {
        name
        color
      }
      content {
        title
        description
      }
      statement
      symbol {
        symbol {
          url
        }
        slug
      }
      images {
        image {
          url
          alternativeText
        }
      }
    }
  }
`;
