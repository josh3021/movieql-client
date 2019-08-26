import gql from 'graphql-tag';

export const HOME_PAGE = gql `
  {
    movies{
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`