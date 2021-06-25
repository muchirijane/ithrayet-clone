import { gql } from "@apollo/client";

export const GET_EXPERIENCE_DATA = gql`
  query ($slug: String!, $locale: String!) {
    projects(where: { slug_eq: $slug }, locale: $locale) {
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
  query ($locale: String!) {
    joinExperience(locale: $locale) {
      ProjectSections {
        ... on ComponentJoinExperienceBlocksCenterTextLayout {
          __typename
          CenterTextLayout: projects {
            project {
              title
              quote
              cover {
                url
                alternativeText
              }
              slug
              date
            }
          }
          middleText
        }
        ... on ComponentJoinExperienceBlocksCenterLogoLayout {
          __typename
          CenterLogo: projects {
            project {
              title
              quote
              cover {
                url
                alternativeText
              }
              slug
              date
            }
          }
        }

        ... on ComponentJoinExperienceBlocks3ColumnLayoutCards {
          __typename
          direction
          CL3_cards: ProjectRelation {
            project {
              title
              quote
              cover {
                url
                alternativeText
              }
              slug
              date
            }
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
