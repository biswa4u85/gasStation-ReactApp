import gql from 'graphql-tag'

export const ALL_DATA_QUERY = gql`
query listGalons {
  listGalons {
    items {
      id
      date
      invoice
      galons
      cash
      ccard
      gcard
      others
      price
      total
      user
    }
  }
}
`