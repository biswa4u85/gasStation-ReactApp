import gql from 'graphql-tag'

export const CREATE_NEW = gql`
mutation createGalons(
  $id: ID!,
  $date: String!,
  $invoice: Int!,
  $galons: Int!,
  $cash: Int!,
  $ccard: Int!,
  $gcard: Int!,
  $others: Int!,
  $price: Int!,
  $total: Int!,
  $user: String
) {
  createGalons(input: {
  id: $id, date: $date, invoice: $invoice, galons: $galons,  cash: $cash,  ccard: $ccard,  gcard: $gcard,  others: $others,  price: $price, total: $total, user: $user,
}) {
  id
  date
  invoice
  galons
  price
  cash
  ccard
  gcard
  others
  total
  user
}
}
`
export const UPDATE_NEW = gql`
mutation updateGalons(
  $id: ID!,
  $date: String!,
  $invoice: Int!,
  $galons: Int!,
  $cash: Int!,
  $ccard: Int!,
  $gcard: Int!,
  $others: Int!,
  $price: Int!,
  $total: Int!,
  $user: String
) {
  updateGalons(input: {
  id: $id, date: $date, invoice: $invoice, galons: $galons,  cash: $cash,  ccard: $ccard,  gcard: $gcard,  others: $others,  price: $price, total: $total, user: $user,
}) {
  id
  date
  invoice
  galons
  price
  cash
  ccard
  gcard
  others
  total
  user
}
}
`