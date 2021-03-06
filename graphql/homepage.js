import { gql } from "@apollo/client";

export const GET_HOMEPAGE_DATA = gql`
  query ($locale: String!, $editionLimit: Int, $articleLimit: Int) {
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
      slug
      articles(limit: $articleLimit) {
        title
        cover {
          url
          alternativeText
          formats
        }
        publishDate
        slug
      }
    }
    featuredEdition: editions(
      locale: $locale
      where: { isFeatured_eq: true }
      sort: "publishedDate:desc"
    ) {
      title
      symbol {
        symbol {
          url
        }
      }
      featuredTitle
      featuredImageLeft {
        url
        alternativeText
        formats
      }
      featuredImageRight {
        url
        alternativeText
        formats
      }
      type {
        value
        number
      }
      slug
      publishedDate
      cover {
        url
        alternativeText
        formats
      }
    }
    artists(
      locale: $locale
      where: {
        _or: [
          { ithraeyat_team_member: false }
          { ithraeyat_team_member_null: true }
        ]
      }
    ) {
      firstName
      lastName
      slug
      signature {
        url
      }
      profileImage {
        url
        alternativeText
      }
    }
    homepage(locale: $locale) {
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
    projects(locale: $locale) {
      title
      cover {
        url
        alternativeText
      }
      color
      slug
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
