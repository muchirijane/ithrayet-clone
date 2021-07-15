export const IMAGES = `
fragment Images on ComponentSiteGeneralLinkedImages {
    image {
      url
      alternativeText
      caption
      artist_relation{
        firstName
        lastName
        slug
       	localizations{
          locale
          firstName
          lastName
          slug
        }
      }
    }
    symbol {
      symbol {
        url
      }
      slug
    }
  }
`;
