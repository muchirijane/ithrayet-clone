import { gql } from "@apollo/client";

export const GET_HOMEPAGE_DATA = gql`
  query ($locale: String!, $editionLimit: Int) {
    loaderImage {
      images {
        url
        alternativeText
      }
    }
    editions(
      locale: $locale
      sort: "publishedDate:desc"
      limit: $editionLimit
    ) {
      title
      cover {
        url
        alternativeText
      }
      publishedDate
    }
    featuredEdition: editions(
      where: { isFeatured_eq: true }
      limit: 1
      sort: "publishedDate:desc"
    ) {
      title
      type {
        value
        number
      }
      publishedDate
      articles {
        publishDate
        slug
        title
        cover {
          url
          alternativeText
        }
        Images {
          image {
            url
            alternativeText
          }
        }
      }
    }
    artists {
      firstName
      lastName
      signature {
        url
      }
      profileImage {
        url
        alternativeText
      }
    }
    homepage {
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
      ourStory {
        mediaQuote
        description
        rightImage {
          url
          alternativeText
        }
        leftImage {
          url
          alternativeText
        }
      }
      mainSection {
        title
        quote
      }
      joinExperience {
        title
        quote
      }
      creatives {
        title
        quote
      }
    }
    projects {
      title
      cover {
        url
        alternativeText
      }
      color
    }
    newsLetterForm {
      title
      description
    }
  }
`;