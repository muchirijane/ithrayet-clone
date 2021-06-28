import { gql } from "@apollo/client";

export const GET_CONTACT_US_DATA = gql`
  query ($locale: String!) {
    contactUs(locale: $locale) {
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
      subTitle
      contactEmail
      creative {
        images {
          image {
            url
            alternativeText
          }
        }
        symbolCard {
          title
          description
          symbol {
            symbol {
              url
            }
            slug
          }
        }
      }
    }
    newsLetterForm {
      title
      description
    }
    feedbackForm {
      title
      description
    }
  }
`;
