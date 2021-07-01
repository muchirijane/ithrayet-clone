import { gql } from "@apollo/client";

export const GET_EDITIONS_DATA = gql`
  query ($locale: String!) {
    editions(locale: $locale) {
      id
      title
      color
      type {
        value
        number
      }
      seo {
        metaTitle
        metaDescription
        metaKeywords
        trackingCode
        metaImage {
          width
          height
          url
        }
      }
      slug
      cover {
        alternativeText
        url
      }
      tags {
        name
        color
      }
      articles {
        title
        cover {
          url
        }
        isFeatured
        isExclusive
      }
    }
    listEdition {
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

export const GET_EDITION_SLUGS = gql`
  query {
    editions {
      slug
    }
  }
`;

export const GET_EDITION_DATA = gql`
  query ($slug: String!, $locale: String!) {
    editions(where: { slug_eq: $slug }, locale: $locale) {
      id
      title
      color
      type {
        value
        number
      }
      seo {
        metaTitle
        metaDescription
        metaKeywords
        trackingCode
        metaImage {
          width
          height
          url
        }
      }
      slug
      cover {
        alternativeText
        url
      }
      tags {
        name
        color
      }
      articles {
        title
        slug
        cover {
          url
          alternativeText
        }
        description
        quote
      }
    }
  }
`;
