import { gql } from "@apollo/client";
import { SEO } from "./fragments/SEO";

export const GET_COLLABORATE_DATA = gql`
  query ($locale: String!) {
    collaborator(locale: $locale) {
      title
      description
      centerCover {
        url
        alternativeText
      }
      question
      titleDescriptionBlock {
        title
        description
      }
      images {
        image {
          url
          alternativeText
        }
      }
      seo {
        ...SEO
      }
      collaboratorsBlock {
        title
        description
        brands {
          title
          location
          image {
            url
            alternativeText
          }
        }
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
    collaborateWithUs(locale: $locale) {
      title
      description
      thankYou {
        title
        description
      }
    }
  }
  ${SEO}
`;
