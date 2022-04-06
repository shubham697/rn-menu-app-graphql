const FirebaseAPI = require('./datasources/firebase')
const { ApolloServer, gql } = require('apollo-server');

const schema = require('./schema')

const server = new ApolloServer({ 
  schema,
  dataSources: () => {
    return {
      FirebaseAPI: new FirebaseAPI()
    };
  },
  context: async({ req, res }) => {
        return {
          token: req.headers.authorization
        };
  }, 
  formatError: (err) => {
    if (err.message.startsWith('Database Error: ')) {
      return new Error('Internal server error');
    }
    return err;
  },
});


server.listen({ port: process.env.PORT || 8080 }).then(({ url }) => {
  console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://studio.apollographql.com/dev
  `);
});

