const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    description: String
  }

  type Query {
    items: [Item]
  }

  type Mutation {
    addItem(name: String!, description: String): Item
    updateItem(id: ID!, name: String, description: String): Item
    deleteItem(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
