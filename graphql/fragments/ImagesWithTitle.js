export const IMAGES_WITH_TITLE = `
fragment ImagesWithTitle on ComponentSiteGeneralLinkedImageWithTitle {
    title
    show_caption
    caption_override
    image {
      url
      alternativeText
      caption
      arabic_caption
      selectedArtist
    }
    symbol {
      symbol {
        url
      }
      slug
    }
  }
`;
