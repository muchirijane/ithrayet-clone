export const IMAGES_WITH_TITLE = `
fragment ImagesWithTitle on ComponentSiteGeneralLinkedImageWithTitle {
   
  
    title
 
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
