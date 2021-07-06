import { gql } from "@apollo/client";

export const GET_EXPERIENCE_DATA = gql`
  query ($slug: String!, $locale: String!) {
    projects(where: { slug_eq: $slug }, locale: $locale) {
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
      published_at
      title
      color
      date
      cover {
        alternativeText
        url
      }
      slug
      quote
      postCard {
        title
        description
      }

      content {
        content
      }
      showcase {
        title
        description
        images {
          image {
            url
            alternativeText
          }
          artist {
            firstName
            lastName
            slug
          }
          photographer {
            firstName
            lastName
          }
          description
        }
      }
      bottomImages {
        image {
          url
          alternativeText
        }
        artist {
          firstName
          lastName
          slug
        }
        photographer {
          firstName
          lastName
        }
        description
      }
    }
  }
`;

export const GET_EXPERIENCE_SLUGS = gql`
  query {
    projects {
      slug
    }
  }
`;

export const GET_JOINEXPERIENCE_DATA = gql`
  query (
    $locale: String!
    $dateFrom: String
    $dateTo: String
    $alphabets: [JSON]
  ) {
    joinExperience(locale: $locale) {
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
      centerLogo {
        url
      }
      centerText
    }
    projects(
      locale: $locale
      where: {
        _and: [
          { _or: $alphabets }
          { _and: [{ date_gte: $dateFrom }, { date_lte: $dateTo }] }
        ]
      }
    ) {
      title
      quote
      cover {
        url
        alternativeText
      }
      slug
      date
    }
    newsLetterForm(locale: $locale) {
      title
      description
    }
    collaborateWithUs(locale: $locale) {
      title
      description
      thankYou {
        title
        description
      }
    }
  }
`;

export const GET_NEXT_PROJECT = gql`
  query ($where: JSON, $limit: Int, $locale: String!) {
    projects(where: $where, limit: $limit, locale: $locale) {
      slug
      title
    }
  }
`;
