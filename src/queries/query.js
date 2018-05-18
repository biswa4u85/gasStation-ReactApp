import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
query listRecipes {
  listRecipes {
    items {
      id
      name
      instructions
      ingredients
    }
  }
}`