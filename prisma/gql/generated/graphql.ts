import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Message = {
  __typename?: 'Message';
  authorId: Scalars['String'];
  id: Scalars['ID'];
  massage: Scalars['String'];
  sentAt: Scalars['DateTime'];
  sentTo: Scalars['String'];
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  delAccount?: Maybe<Scalars['Boolean']>;
  deleteMessage?: Maybe<Scalars['Boolean']>;
  deletePost?: Maybe<Scalars['Boolean']>;
  sendMessage?: Maybe<Message>;
  signin?: Maybe<Scalars['Boolean']>;
  signout?: Maybe<Scalars['Boolean']>;
  signup?: Maybe<User>;
  updatePost?: Maybe<Post>;
};


export type MutationCreatePostArgs = {
  input?: InputMaybe<PostContent>;
};


export type MutationDelAccountArgs = {
  input?: InputMaybe<DelAccount>;
};


export type MutationDeleteMessageArgs = {
  input?: InputMaybe<DelMessage>;
};


export type MutationDeletePostArgs = {
  input?: InputMaybe<DelPost>;
};


export type MutationSendMessageArgs = {
  input?: InputMaybe<MessageContent>;
};


export type MutationSigninArgs = {
  input?: InputMaybe<AuthInfo>;
};


export type MutationSignupArgs = {
  input?: InputMaybe<UserInfo>;
};


export type MutationUpdatePostArgs = {
  input?: InputMaybe<UpdatePost>;
};

export type Post = {
  __typename?: 'Post';
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  post: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  allPosts: Array<Post>;
  allUsers: Array<User>;
  messages: Array<Message>;
  posts: Array<Post>;
  user?: Maybe<User>;
};


export type QueryMessagesArgs = {
  input?: InputMaybe<GetAllMessagesByUser>;
};


export type QueryPostsArgs = {
  input?: InputMaybe<GetAllPostsByUser>;
};


export type QueryUserArgs = {
  input?: InputMaybe<GetUser>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  message?: Maybe<Array<Maybe<Message>>>;
  password: Scalars['String'];
  phone: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  post?: Maybe<Array<Maybe<Post>>>;
  updatedAt: Scalars['DateTime'];
  userName: Scalars['String'];
};

export type AuthInfo = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  userName?: InputMaybe<Scalars['String']>;
};

export type DelAccount = {
  id: Scalars['ID'];
};

export type DelMessage = {
  id: Scalars['ID'];
};

export type DelPost = {
  id: Scalars['ID'];
};

export type GetAllMessagesByUser = {
  authorId: Scalars['String'];
  sentTo: Scalars['String'];
};

export type GetAllPostsByUser = {
  authorId: Scalars['String'];
};

export type GetUser = {
  email?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type MessageContent = {
  authorId: Scalars['String'];
  massage: Scalars['String'];
  sentTo: Scalars['String'];
};

export type PostContent = {
  authorId: Scalars['String'];
  post: Scalars['String'];
  title: Scalars['String'];
};

export type UpdatePost = {
  post: Scalars['String'];
  title: Scalars['String'];
};

export type UserInfo = {
  address: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  userName: Scalars['String'];
};

export type SignupMutationVariables = Exact<{
  input?: InputMaybe<UserInfo>;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'User', id: string, userName: string, email: string } | null };


export const SignupDocument = gql`
    mutation signup($input: userInfo) {
  signup(input: $input) {
    id
    userName
    email
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    signup(variables?: SignupMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignupMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignupMutation>(SignupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signup', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;