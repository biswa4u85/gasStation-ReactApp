import gql from 'graphql-tag'

export const CREATE_NEW = gql`
mutation createGalons(
  $id: ID!,
  $invoice: String!,
  $galons: String!,
  $date: String!,
  $sale: String!,
  $ccard: String!,
  $total: String!,
  $price: String!,
  $cash: String!,
  $gcard: String!,
  $others: String!,
) {
  createGalons(input: {
  id: $id, invoice: $invoice, galons: $galons, date: $date, sale: $sale, ccard: $ccard, total: $total, price: $price, cash: $cash, gcard: $gcard, others: $others,
}) {
  id
  invoice
  galons
  date
  sale
  ccard
  total
  price
  cash
  gcard
  others
}
}
`