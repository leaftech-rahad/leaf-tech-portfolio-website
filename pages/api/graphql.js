import { ApolloServer } from "apollo-server-micro";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import Cors from "micro-cors";
import { Query } from "../../prisma/gql/resolvers/Query";
import { Mutation } from "../../prisma/gql/resolvers/Mutation";
import { typeDefs } from "../../prisma/gql/typeDefs";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";

// import expressGraphQL from "express-graphql";
// import graphqlUploadExpress from "graphql-upload";

const cors = Cors();
const schema = makeExecutableSchema({
  Upload: GraphQLUpload,
  resolvers: { Query, Mutation },
  typeDefs,
});

const apolloServer = new ApolloServer({
  schema,
  //csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  Upload: true,
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler(
    {
      path: "/api/graphql",
    }
    // graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
    // expressGraphQL.graphqlHTTP({ schema })
  )(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
