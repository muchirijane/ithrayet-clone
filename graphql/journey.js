import { gql } from "@apollo/client";

export const GET_JOURNEY_DATA = gql`
  query ($locale: String!) {
    journey(locale: $locale) {
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
      title
      ourTeam {
        title
        description
      }
      Teams {
        teamImage {
          image {
            url
            alternativeText
          }
          name
        }
        quote
        title
      }
      ithraeyat {
        title
        images {
          image {
            url
            alternativeText
          }
        }
        symbolCard {
          title
        }
      }
      milestones {
        title
      }
      milestonesGoals {
        year
        quote {
          title
          quote
        }
        images {
          image {
            url
            alternativeText
          }
        }
      }
    }
    newsLetterForm {
      title
      description
    }
  }
`;
