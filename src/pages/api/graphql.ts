import { Neo4jGraphQL } from "@neo4j/graphql";
import neo4j from "neo4j-driver";
import { typeDefs } from "./typeDefs";
import { createYoga } from "graphql-yoga";

// Create a Neo4j driver instance to connect to Neo4j AuraDB
const driver = neo4j.driver(
  "neo4j+s://47bf683d.databases.neo4j.io:7687",
  neo4j.auth.basic("neo4j", "VY1gKJWDr79Ql44_ktUGO9adQPlY1bk2Tv8dE9hi0uY")
);

// Type definitions and a Neo4j driver instance are all that's required for
// building a GraphQL API with the Neo4j GraphQL Library - no resolvers!
const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
});

// Building the Neo4j GraphQL schema is an async process
const initServer = async () => {
  console.log("Building GraphQL server");
  return await neoSchema.getSchema();
};

// Note the use of the top-level await here in the call to initServer()
export default createYoga({
  schema: await initServer(),
  graphqlEndpoint: "/api/graphql",
});
