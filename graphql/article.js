import { gql } from "@apollo/client";

export const GET_ARTICLE_DATA = gql`
  query ($slug: String!, $locale: String!) {
    articles(where: { slug_eq: $slug }, locale: $locale) {
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
      slug
      title
      tags {
        name
        color
      }
      author {
        firstName
        lastName
      }
      timeToRead
      isFeatured
      isExclusive
      cover {
        url
        alternativeText
      }
      publishDate
      quote
      description
      Images {
        artist {
          firstName
          lastName
          slug
        }
        photographer {
          firstName
          lastName
        }
        image {
          url
          alternativeText
        }
        symbol {
          symbol {
            url
          }
        }
      }

      ArticleBlocks {
        ... on ComponentStandardArticleBlocksIntroductionSection {
          __typename
          title
          description
        }
        ... on ComponentStandardArticleBlocksQuoteWithText {
          __typename
          quoteWithText: quote {
            artistName
            title
            artist_type {
              Type
            }
          }
          description
          quoteWithText_title: title
        }

        ... on ComponentStandardArticleBlocksCenteredQuote {
          __typename
          centeredQuote: quote {
            artistName
            title
            artist_type {
              Type
            }
          }
        }
        ... on ComponentStandardArticleBlocksCenteredTextParagraph {
          __typename
          title
          description
        }
        ... on ComponentStandardArticleBlocksQuoteWithImage {
          __typename
          quoteWithImage_quote: quote {
            artistName
            title
            artist_type {
              Type
            }
          }
          capsTitle
          isSmallQuote
          quoteWithImage_image: image {
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
            symbol {
              symbol {
                url
              }
            }
          }
          layout
          imageOrientation
        }

        ... on ComponentStandardArticleBlocksColumnLayoutTextWithTitles {
          __typename
          clTextWithTitle: content {
            title
            description
          }
        }
        ... on ComponentStandardArticleBlocksColumnLayoutImageText1 {
          __typename
          clImageText1_title: title
          clImageText1_description: description
          clImageText1_image: image {
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
            symbol {
              symbol {
                url
              }
            }
          }
          clImageText1_type: type
          clImageText1_isCentered: isCentered
        }

        ... on ComponentStandardArticleBlocksBigImageWithTitle {
          __typename
          bigImageWT_title: title
          bigImageWT_image: image {
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
            symbol {
              symbol {
                url
              }
            }
          }
        }

        ... on ComponentStandardArticleBlocksColumnLayoutTextWithoutTitles {
          __typename
          clTWoT_content: richText {
            content
          }
        }
        ... on ComponentStandardArticleBlocksImageStyleFullWidth {
          __typename
          imageFullWidth_title: title
          imageFullWidth_image: image {
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
            symbol {
              symbol {
                url
              }
            }
          }
        }
        ... on ComponentStandardArticleBlocksFullWidthImage {
          __typename
          fullWidthImage_title: title
          fullWidthImage_image: image {
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
            symbol {
              symbol {
                url
              }
            }
          }
          fullWidthImage_type: type
        }
        ... on ComponentStandardArticleBlocks3ColumnLayoutTextWithoutTitles {
          __typename
          cl3TWoT_content: richText {
            content
          }
        }
        ... on ComponentStandardArticleBlocksColumnLayoutText {
          __typename
          clT_content: columns {
            title
            description
          }
        }
      }
    }
  }
`;

export const GET_ARTICLES_SLUGS = gql`
  query {
    articles {
      slug
    }
  }
`;
