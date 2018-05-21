import gql from 'graphql-tag'

export const CREATE_NEW = gql`
mutation createGalons(
  $id: ID!,
  $date: String!,
  $invoice: Int!,
  $galons: Int!,
  $price: Int!,
  $total: Int!,
  $user: String
) {
  createGalons(input: {
  id: $id, date: $date, invoice: $invoice, galons: $galons,  price: $price, total: $total, user: $user,
}) {
  id
  date
  invoice
  galons
  price
  total
  user
}
}
`