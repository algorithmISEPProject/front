import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

//import { UserPostsArgs } from "../../src/components/feed/feed";
import {
  Post,
  User,
  UserPostsQuery,
  UserPostsQueryVariables,
  Comment,
  Hobby,
  Event,
  Group,
} from "./typeInterface";
import { Neo4jGraphQL } from "@neo4j/graphql";
import { startStandaloneServer } from "@apollo/server/standalone";
import { createYoga } from "graphql-yoga";
import driver from "./driver";

const typeDefs = `#graphql
  type User {
    _id: ID! @id
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    avatar: String
    banner: String
    bio: String
    location: String
    job: String
    descText: String
    descLink: String
    followers: [User!]! @relationship(type: "FOLLOWS", direction: IN)
    following: [User!]! @relationship(type: "FOLLOWS", direction: OUT)
    friends: [User]
    posts: [Post!]! @relationship(type: "POSTED", direction: OUT)
    hobbies: [Hobby!]! @relationship(type: "HAS_HOBBY", direction: OUT)
    likes: [Post!]! @relationship(type: "LIKED", direction: OUT)
    events: [Event!]! @relationship(type: "ATTENDS", direction: OUT)
    groups: [Group!]! @relationship(type: "MEMBER_OF", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
  }

  type Post {
    id: ID! @id
    content: String
    imageURL: String
    createdAt: DateTime! @timestamp(operations: [CREATE])
    author: User! @relationship(type: "POSTED", direction: IN)
    comments: [Comment!]! @relationship(type: "COMMENTED_ON", direction: IN)
    likes: [User!]! @relationship(type: "LIKED", direction: IN)
  }

  type Comment {
    id: ID! @id
    content: String
    createdAt: DateTime! @timestamp(operations: [CREATE])
    post: Post! @relationship(type: "COMMENTED_ON", direction: OUT)
    author: User! @relationship(type: "WROTE", direction: OUT)
  }

  type Hobby {
    id: Int!
    name: String!
    users: [User!]! @relationship(type: "HAS_HOBBY", direction: IN)
  }

  type Event {
    id: ID! @id
    name: String!
    description: String
    createdAt: DateTime! @timestamp(operations: [CREATE])
    date: DateTime!
    location: String!
    attendees: [User!]! @relationship(type: "ATTENDS", direction: IN)
  }

  type Group {
    id: ID! @id
    name: String!
    description: String!
    createdAt: DateTime! @timestamp(operations: [CREATE])
    members: [User!]! @relationship(type: "MEMBER_OF", direction: IN)
  }

  type Query {
    users: [User]
    user: User
    userPosts: [Post]
    userLikedPosts: [Post]
    userRepliedPosts: [Post]
    posts: [Post]
    post: [Post]
  }
`;

const posts: Post[] = [
  {
    id: "1",
    content: "J'ai créer mon only fan, donnez moi de la force",
    createdAt: new Date().toISOString(),
    author: {
      id: "1",
      username: "vic_dub",
      firstName: "Victor",
      lastName: "Dubrana",
      email: "victor@example.com",
      avatar: "bonjour",
      followers: [],
      following: [],
      posts: [],
      hobbies: [],
      likes: [],
      events: [],
      groups: [],
      createdAt: new Date().toISOString(),
    },
    comments: [],
    likes: [],
  },
  {
    id: "2",
    content: "Je suis en train de cook ça fort",
    createdAt: new Date().toISOString(),
    author: {
      id: "2",
      username: "Victor Dubrana",
      firstName: "Victor",
      lastName: "Dubrana",
      email: "victor@example.com",
      avatar: "bonjour",
      followers: [],
      following: [],
      posts: [],
      hobbies: [],
      likes: [],
      events: [],
      groups: [],
      createdAt: new Date().toISOString(),
    },
    comments: [],
    likes: [],
  },
  // Add more posts if needed
];

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

const resolvers = {
  Query: {
    users: async () => {
      const session = driver.session();

      const result = await session.run("MATCH (u:User) RETURN u");
      const users = result.records.map((record) => record.get("u").properties);

      await session.close();
      return users;
    },
  },
};
