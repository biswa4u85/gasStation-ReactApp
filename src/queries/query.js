import gql from 'graphql-tag'

export const ALL_DATA_QUERY = gql`
query listGalons {
  listGalons {
    items {
      id
      date
      invoice
      galons
      price
      total
      user
    }
  }
}
`