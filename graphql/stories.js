import { gql } from "@apollo/client";
import { GET_FILTER_AUTHORS, GET_FILTER_TAGS } from "./filters";

export const GET_STORIES_DATA = gql`
  query ($locale: String!, $isOnlineExclusive: Boolean, $name: String,  $authFirstName:String, $authLastName: String, $tags: [JSON], $dateFrom: String, $dateTo: String) {
    stories(
      locale: $locale
      where: { _or: [
        {_and:[
          {isOnlineExclusive_eq: $isOnlineExclusive},
          {name_eq: $name}
        ]},
        {_and: [
          {
            _and: [
              { articles: { author: { firstName_contains: $authFirstName } } }
              { articles: { author: { lastName_contains: $authLastName } } }
            ]
          }
          { _or: $tags }
          { _and: [{articles : {publishDate_gte: $dateFrom}}, {articles : {publishDate_lte: $dateTo}}] }
        ]}
      ]}
    ) {
      name
      articles {
        description
        tags {
          name
          color
        }
        quote
        title
        cover {
          url
          alternativeText
        }
        slug
      }
    }
    countStories: stories(where: { isOnlineExclusive_eq: true }) {
      name
    }
    listStory {
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
    }
    allStoryNames: stories(locale: $locale, where:{isOnlineExclusive_eq: $isOnlineExclusive}){
      name
    }
    ${GET_FILTER_AUTHORS}
    ${GET_FILTER_TAGS}
  }
`;
