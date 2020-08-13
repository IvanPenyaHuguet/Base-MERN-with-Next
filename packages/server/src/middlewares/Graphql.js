const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("../graphql/types");
const resolvers = require("../graphql/resolvers");

const Graphql = (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
  });

  server.applyMiddleware({ app, path: "/graphql" });
};

module.exports = Graphql;
