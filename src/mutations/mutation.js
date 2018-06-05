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
export const CREATE_NEW_SETTING = gql`
mutation createGalons(
  $id: ID!,
  $price: Int!,
  $metro1: Int!,
  $metro2: Int!,
  $metro3: Int!,
  $metro4: Int!,
) {
  createGalons(input: {
  id: $id, price: $price, metro1: $metro1,  metro2: $metro2, metro3: $metro3, metro4: $metro4,
}) {
  id
  price
  metro1
  metro2
  metro3
  metro4
}
}
`
export const UPDATE_NEW_Settings = gql`
mutation updateGalons(
  $id: ID!,
  $price: Int!,
  $metro1: Int!,
  $metro2: Int!,
  $metro3: Int!,
  $metro4: Int!,
) {
  updateGalons(input: {
    id: $id, price: $price, metro1: $metro1,  metro2: $metro2, metro3: $metro3, metro4: $metro4,
}) {
  id
  price
  metro1
  metro2
  metro3
  metro4
}
}
`