export const IMAGES_WITH_TITLE = `
fragment ImagesWithTitle on ComponentSiteGeneralLinkedImageWithTitle {
   
  
    title
 
    image {
      url
      alternativeText
      caption
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
