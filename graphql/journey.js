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
    writeToUsForm(locale: $locale) {
      title
      description
      thankYou {
        title
        description
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
    artists(locale: $locale, where: { type: "writer" }) {
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
      id
    }
  }
`;
