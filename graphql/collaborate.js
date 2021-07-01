import { gql } from "@apollo/client";

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
      collaboratorsBlock {
        title
        description
        brands {
          title
          location
          image_linking {
            image {
              url
              alternativeText
            }
          }
        }
      }
    }
    newsLetterForm(locale: $locale) {
      title
      description
    }
    collaborateWithUs(locale: $locale) {
      title
      description
    }
  }
`;
