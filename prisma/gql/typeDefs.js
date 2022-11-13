import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  scalar DateTime
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
    password: String!
    phone: String!
    address: String!
    photo: String
    createdAt: DateTime!
    updatedAt: DateTime!
    post: [Post]
    message: [Message]
  }
  type Message {
    id: ID!
    user: User
    authorId: String!
    massage: String!
    sentTo: String!
    sentAt: DateTime!
  }
  type Post {
    id: ID!
    user: User
    authorId: String!
    title: String!
    post: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    user(input: getUser): User
    allUsers: [User!]!
    posts(input: getAllPostsByUser): [Post!]!
    allPosts: [Post!]!
    messages(input: getAllMessagesByUser): [Message!]!
  }
  input getUser {
    userName: String
    email: String
  }
  input getAllPostsByUser {
    authorId: String!
  }
  input getAllMessagesByUser {
    authorId: String!
    sentTo: String!
  }

  type Mutation {
    signup(input: userInfo): User
    signin(input: authInfo): Boolean
    delAccount(input: delAccount): Boolean
    signout: Boolean
    sendMessage(input: messageContent): Message
    deleteMessage(input: delMessage): Boolean
    createPost(input: postContent): Post
    updatePost(input: updatePost): Post
    deletePost(input: delPost): Boolean
  }
  input userInfo {
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
    password: String!
    phone: String!
    address: String!
    photo: String
  }
  input authInfo {
    userName: String
    email: String
    password: String!
  }
  input delAccount {
    id: ID!
  }
  input messageContent {
    authorId: String!
    massage: String!
    sentTo: String!
  }
  input delMessage {
    id: ID!
  }
  input postContent {
    authorId: String!
    title: String!
    post: String!
  }
  input updatePost {
    title: String!
    post: String!
  }
  input delPost {
    id: ID!
  }
`;
