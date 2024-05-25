export const typeDefs = `
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

  `;