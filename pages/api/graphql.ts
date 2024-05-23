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
    numberLikes: Int
  }

  type UserPost {
    _id: ID!
    username: String
    content: String
    userIconURL: String
    createdAt: String
    likesNumber: String
    commentsNumber: String
  }

  type Post {
    _id: ID!
    username: String
    content: String
    userIconURL: String
    createdAt: String
    likesNumber: String
    commentsNumber: String
  }

  type Event {
    id: ID!
    name: String
    description: String
    location: String 
    date: String
    attendees: [User]
  }

  type Group {
    id: ID!
    name: String
    description: String
    members: [User]
  }

  type Hobby {
    id: ID!
    name: String
  }





  type Query {
    users: [User]
    user: User
    userPosts: [UserPost]
    posts: [Post]
    post: Post
  }
`;

export const resolvers = {
  Query: {
    users: () => {
      return [
        {
          _id: "1",
          username: "Victor Dubrana",
          userpseudo: "vic_dub",
          hobbies: [
            { id: 1, name: "tennis" },
            { id: 2, name: "foot" },
          ],
          posts: [
            {
              id: 1,
              content: "J'ai créer mon only fan, donnez moi de la force",
            },
          ],
          numberLikes: 10,
        },
        {
          _id: "2",
          username: "Dimitar Dimitrov",
          userpseudo: "dimitroweb",
          hobbies: [{ id: 3, name: "ping-pong" }],
          posts: [
            {
              id: 1,
              content: "J'ai créer mon only fan, donnez moi de la force",
            },
          ],
          numberLikes: 10,
        },
      ];
    }, //need to match the name in Query
    userPosts: () => {
      return [
        {
          _id: "1",
          username: "Victor Dubrana",
          userpseudo: "vic_dub",
          content: "J'ai créer mon only fan, donnez moi de la force",
          userIconURL: "bonjour",
          createdAt: "1h",
          likesNumber: 120,
          commentsNumber: 237,
        },
        {
          _id: "2",
          username: "Victor Dubrana",
          userpseudo: "vic_dub",
          content: "Je suis en train de cook ça fort",
          userIconURL: "bonjour",
          createdAt: "10h",
          likesNumber: 39,
          commentsNumber: 72,
        },
      ];
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
