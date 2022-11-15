import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";
import { getSdk } from "../prisma/gql/generated/graphql";

const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? `https://leaf-tech-portfolio-website.vercel.app/api/graphql`
    : `http://localhost:3000/api/graphql`;

const gqlClient = new GraphQLClient(SERVER_URL);
export const { signup } = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
