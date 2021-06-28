export const IMAGES = `
fragment Images on ComponentSiteGeneralLinkedImages {
    artist {
      slug
      firstName
      lastName
    }
    photographer {
      firstName
      lastName
    }
  
    description
    image {
      url
      alternativeText
    }
    symbol {
      symbol {
        url
      }
      slug
    }
  }
`;
