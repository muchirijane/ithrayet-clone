import { gql } from "@apollo/client";

export const GET_SYMBOLS_DATA = gql`
  query ($locale: String!) {
    symbols(locale: $locale) {
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
    listSymbol(locale: $locale) {
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
export const GET_SYMBOLS_SLUG = gql`
  query {
    symbols {
      slug
    }
  }
`;
export const GET_SYMBOL_DATA = gql`
  query ($slug: String!, $locale: String!) {
    symbols(where: { slug_eq: $slug }, locale: $locale) {
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
      movingTextTitle
      Title
      ideaTitle
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
    newsLetterForm(locale: $locale) {
      title
      description
      thankYou {
        title
        description
      }
    }
  }
`;

export const GET_SYMBOLS_URLS = gql`
  query ($limit: Int!, $locale: String!) {
    symbols(locale: $locale, limit: $limit) {
      symbol {
        url
      }
    }
  }
`;
