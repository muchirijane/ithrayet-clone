export const IMAGES = `
fragment Images on ComponentSiteGeneralLinkedImages {
    image {
      url
      alternativeText
      caption
      artist_relation: selectedArtist
    }
    symbol {
      symbol {
        url
      }
      slug
    }
  }
`;
