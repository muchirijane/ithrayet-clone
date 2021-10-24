export const GET_FILTER_AUTHORS = `filter_authors : artists(locale: $locale)  {
  firstName
  lastName
}
`;

export const GET_FILTER_TAGS = `filter_tags :tags(locale: $locale)  {
  name
}`;
