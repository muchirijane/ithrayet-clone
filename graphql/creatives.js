import { gql } from "@apollo/client";
import { GET_FILTER_TAGS } from "./filters";

export const GET_CREATIVES_DATA = gql`
  query ($locale: String!,$tags: [JSON],$alphabets: [JSON]) {
    artists(locale: $locale, where :{
      _and: [
        {_or:$alphabets}
        {_or:$tags}
      ]
    }) {
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
    listCreative(locale: $locale) {
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
      published_at
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

export const GET_NEXT_CREATIVE = gql`
  query ($where: JSON, $limit: Int, $locale: String!) {
    artists(where: $where, limit: $limit, locale: $locale) {
      slug
      firstName
      lastName
    }
  }
`;

export const GET_RELATED_ARTICLES = gql`
  query ($where: JSON, $limit: Int, $locale: String!) {
    articles(where: $where, limit: $limit, locale: $locale) {
      title
      quote
      cover {
        url
        alternativeText
      }
    }
  }
`;
