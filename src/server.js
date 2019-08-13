import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";

const server = new GraphQLServer({ schema });
server.start({ port: 5000 }, () =>
  console.log("Server is live on http://localhost:5000")
);
