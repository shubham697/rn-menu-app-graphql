const { gql } = require('apollo-server');

const typeDefs = gql`
  type Menu {
    id : String
    name: String
    title: String 
    url: String
  }

  type Query {
    menus : [Menu]
  }
`

module.exports = typeDefs;
