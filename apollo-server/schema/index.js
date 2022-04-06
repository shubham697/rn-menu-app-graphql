const { makeExecutableSchema } = require('graphql-tools')
const menu = require('./Menu')

const schema = makeExecutableSchema({
    typeDefs: [
        menu.typeDefs,
    ],
    resolvers: [
        menu.resolvers
    ]
})

module.exports = schema