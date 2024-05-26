import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import neo4j from "neo4j-driver";
import saltAndHashPassword from "@/utils/password";
import { Neo4jAdapter } from "@auth/neo4j-adapter";

const neo4jUri = process.env.NEXT_PUBLIC_NEO4J_URI || "";
const neo4jUser = process.env.NEXT_PUBLIC_NEO4J_USER || "";
const neo4jPassword = process.env.NEXT_PUBLIC_NEO4J_PASSWORD || "";

const driver = neo4j.driver(
  neo4jUri,
  neo4j.auth.basic(neo4jUser, neo4jPassword)
);

const neo4jSession = driver.session();

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  adapter: Neo4jAdapter(neo4jSession),
});
