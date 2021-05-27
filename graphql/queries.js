import { gql } from "@apollo/client";

const GET_HOMEPAGE_DATA = gql`
query($locale: String!, $editionLimit: Int){
  loaderImage {
    images {
      url
    }
  }
  editions(locale: $locale,sort:"publishedDate:desc",limit: $editionLimit) {
    title
    cover {
      url
    }
    publishedDate,
    
  },
  featuredEdition: editions(where:{isFeatured_eq:true},limit:1){
    title,
    type{
      value,
      number
    },
    articles{
      title,
      cover{
        url
      },
      images{
        url
      }
    }

  },
  artists {
    firstName
    lastName
    signature {
      url
    }
    profileImage {
      url
    }
  },
  homepage{
    ourStory{
      mediaQuote,
      description
    },
    mainSection{
      title,
      quote
    },
    joinExperience{
      title,
      quote
    },
    newsLetter{
      title,
      description
    },
    creatives{
      title,
      quote
    }
  },
  projects{
    title,
    cover{
      url
    }
  }
}
`;

export { GET_HOMEPAGE_DATA };
