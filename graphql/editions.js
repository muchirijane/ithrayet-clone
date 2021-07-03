import { gql } from "@apollo/client";
import { GET_FILTER_AUTHORS, GET_FILTER_TAGS } from "./filters";
export const GET_EDITIONS_DATA = gql`
  query ($locale: String!, $authFirstName:String, $authLastName: String, $tags: [JSON], $dateFrom: String, $dateTo: String ) {
    editions(locale: $locale,  
      where: {
        _and: [
          {
            _and: [
              { articles: { author: { firstName_contains: $authFirstName } } }
              { articles: { author: { lastName_contains: $authLastName } } }
            ]
          }
          { _and: $tags }
          { _and: [{publishedDate_gte: $dateFrom}, {publishedDate_lte: $dateTo}] }
        ]
      }) {
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
    ${GET_FILTER_AUTHORS}
    ${GET_FILTER_TAGS}
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
  query (
    $slug: String!
    $locale: String!
    $isFeatured: Boolean
    $isExclusive: Boolean
  ) {
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
      articles(
        where: { isFeatured_eq: $isFeatured, isExclusive: $isExclusive }
      ) {
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
