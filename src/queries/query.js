import gql from 'graphql-tag'

export const ALL_DATA_QUERY = gql`
query listRecipes {
  listRecipes {
    items {
      id
      name
      instructions
      ingredients
      }
    }
  }
`