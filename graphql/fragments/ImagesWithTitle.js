export const IMAGES_WITH_TITLE = `
fragment ImagesWithTitle on ComponentSiteGeneralLinkedImageWithTitle {
    artist {
      slug
      firstName
      lastName
    }
    photographer {
      firstName
      lastName
    }
    title
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
