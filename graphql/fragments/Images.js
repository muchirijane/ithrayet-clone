export const IMAGES = `
fragment Images on ComponentSiteGeneralLinkedImages {
    image {
      url
      alternativeText
      caption
      arabic_caption
      selectedArtist
    }
    show_caption
    caption_override
    symbol {
      symbol {
        url
      }
      slug
    }
  }
`;
