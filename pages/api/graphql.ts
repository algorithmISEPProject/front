import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

const typeDefs = ` #graphql

  type User {
    _id: ID!
    username: String  
    userpseudo: String  
    hobbies: [Hobby]
    posts: [Post]
    groups: [Group]
    events: [Event]
  }

  type Post {
    id: ID!
    content: String
    imageURL: String
    createdAt: String
  }

  type Event {
    id: ID!
    name: string
    description: string
    location: string 
    date: string
    attendees: [user]
  }

  type Group {
    id: ID!
    name: string
    description: string
    members: [user]
  }

  type Hobby {
    id: ID!
    name: String
  }

  type Query {
    users: [User]
    user: User
    connectedUserposts: [Post]
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return [
        {
          _id: "1",
          username: "Victor Dubrana",
          userpseudo: "vic_dub",
          hobbies: [{ id: 1, name: "tennis" }],
          posts: [
            {
              id: 1,
              content: "J'ai créer mon only fan, donnez moi de la force",
            },
          ],
        },
        {
          _id: "2",
          username: "Dimitar Dimitrov",
          userpseudo: "dimitroweb",
          hobbies: [{ id: 2, name: "ping-pong" }],
          posts: [
            {
              id: 1,
              content: "J'ai créer mon only fan, donnez moi de la force",
            },
          ],
        },
      ];
    }, //need to match the name in Query
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
