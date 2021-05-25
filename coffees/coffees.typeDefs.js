import { gql } from "apollo-server";

export default gql`
  type Coffee {
    id: Int!
    menu: String!
    price: Int!
    genre: String
  }
  type Query {
    coffees: [Coffee]
    coffee(id: Int!): Coffee
  }
  type Mutation {
    createMenu(menu: String!, price: Int!, genre: String): Coffee
    deleteMenu(id: String!): Boolean
  }
`;
