import { ApolloServer } from "apollo-server-micro";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import Cors from "micro-cors";
import { Query } from "../../prisma/gql/resolvers/Query";
import { Mutation } from "../../prisma/gql/resolvers/Mutation";
import { typeDefs } from "../../prisma/gql/typeDefs";

const cors = Cors();
const schema = makeExecutableSchema({
  resolvers: { Query, Mutation },
  typeDefs,
});

const apolloServer = new ApolloServer({
  schema,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
