import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  "neo4j+s://47bf683d.databases.neo4j.io:7687",
  neo4j.auth.basic("neo4j", "VY1gKJWDr79Ql44_ktUGO9adQPlY1bk2Tv8dE9hi0uY")
);

export default driver;
