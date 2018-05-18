import gql from 'graphql-tag'

export const CREATE_NEW = gql`
mutation createRecipe(
  $id: ID!,
  $name: String!,
  $ingredients: [String!],
  $instructions: [String!]
) {
createRecipe(input: {
  id: $id, name: $name, ingredients: $ingredients, instructions: $instructions,
}) {
  id
  name
  instructions
  ingredients
}
}
`