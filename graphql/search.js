import { gql } from "@apollo/client";
import { SEO } from "./fragments/SEO";

export const SEARCH_RESULTS = gql`
  query (
    $locale: String!
    $search_term: String!
    $withStories: Boolean!
    $withProjects: Boolean!
    $withEditions: Boolean!
    $withCreatives: Boolean!
  ) {
    stories(where: { name_contains: $search_term }, locale: $locale)
      @include(if: $withStories) {
      name
      articles {
        slug
        cover {
          url
          alternativeText
        }
      }
    }
    projects(where: { title_contains: $search_term }, locale: $locale)
      @include(if: $withProjects) {
      title
      cover {
        url
        alternativeText
      }
      slug
    }
    editions(
      where: {
        _or: [
          { title_contains: $search_term }
          { tags: { name_contains: $search_term } }
        ]
      }
      locale: $locale
    ) @include(if: $withEditions) {
      title
      cover {
        url
        alternativeText
      }
      type {
        value
        number
      }
      slug
    }
    artists(
      where: {
        _or: [
          { firstName_contains: $search_term }
          { tags: { name_contains: $search_term } }
        ]
      }
      locale: $locale
    ) @include(if: $withCreatives) {
      firstName
      lastName
      profileImage {
        url
        alternativeText
      }
      slug
    }
  }
`;

export const GET_SEARCH_DATA = gql`
  query ($locale: String!) {
    search(locale: $locale) {
      seo {
        ...SEO
      }
    }
  }
  ${SEO}
`;
