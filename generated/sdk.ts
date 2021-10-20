import { endpointUrl, fetchParams } from './../lib/fetch-config';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpointUrl as string, {
    method: "POST",
    ...(fetchParams),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft?: Maybe<Post>;
  deletePost?: Maybe<Post>;
  publish?: Maybe<Post>;
  signupUser?: Maybe<User>;
};


export type MutationCreateDraftArgs = {
  authorEmail?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


export type MutationDeletePostArgs = {
  postId?: Maybe<Scalars['String']>;
};


export type MutationPublishArgs = {
  postId?: Maybe<Scalars['String']>;
};


export type MutationSignupUserArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  drafts?: Maybe<Array<Maybe<Post>>>;
  feed?: Maybe<Array<Maybe<Post>>>;
  filterPosts?: Maybe<Array<Maybe<Post>>>;
  post?: Maybe<Post>;
};


export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars['String']>;
};


export type QueryPostArgs = {
  postId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type PostQueryQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type PostQueryQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id?: number | null | undefined, title?: string | null | undefined, content?: string | null | undefined, published?: boolean | null | undefined, author?: { __typename?: 'User', id?: number | null | undefined, name?: string | null | undefined } | null | undefined } | null | undefined };

export type PublishMutationMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type PublishMutationMutation = { __typename?: 'Mutation', publish?: { __typename?: 'Post', id?: number | null | undefined, title?: string | null | undefined, content?: string | null | undefined, published?: boolean | null | undefined, author?: { __typename?: 'User', id?: number | null | undefined, name?: string | null | undefined } | null | undefined } | null | undefined };

export type DeleteMutationMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type DeleteMutationMutation = { __typename?: 'Mutation', deletePost?: { __typename?: 'Post', id?: number | null | undefined, title?: string | null | undefined, content?: string | null | undefined, published?: boolean | null | undefined, author?: { __typename?: 'User', id?: number | null | undefined, name?: string | null | undefined } | null | undefined } | null | undefined };

export type CreateDraftMutationMutationVariables = Exact<{
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  authorEmail: Scalars['String'];
}>;


export type CreateDraftMutationMutation = { __typename?: 'Mutation', createDraft?: { __typename?: 'Post', id?: number | null | undefined, title?: string | null | undefined, content?: string | null | undefined, published?: boolean | null | undefined, author?: { __typename?: 'User', id?: number | null | undefined, name?: string | null | undefined } | null | undefined } | null | undefined };

export type DraftsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type DraftsQueryQuery = { __typename?: 'Query', drafts?: Array<{ __typename?: 'Post', id?: number | null | undefined, title?: string | null | undefined, content?: string | null | undefined, published?: boolean | null | undefined, author?: { __typename?: 'User', id?: number | null | undefined, name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type FeedQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedQueryQuery = { __typename?: 'Query', feed?: Array<{ __typename?: 'Post', id?: number | null | undefined, title?: string | null | undefined, content?: string | null | undefined, published?: boolean | null | undefined, author?: { __typename?: 'User', id?: number | null | undefined, name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type SignupMutationMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
}>;


export type SignupMutationMutation = { __typename?: 'Mutation', signupUser?: { __typename?: 'User', id?: number | null | undefined, name?: string | null | undefined, email?: string | null | undefined } | null | undefined };


export const PostQueryDocument = `
    query PostQuery($postId: String!) {
  post(postId: $postId) {
    id
    title
    content
    published
    author {
      id
      name
    }
  }
}
    `;
export const usePostQueryQuery = <
      TData = PostQueryQuery,
      TError = unknown
    >(
      variables: PostQueryQueryVariables,
      options?: UseQueryOptions<PostQueryQuery, TError, TData>
    ) =>
    useQuery<PostQueryQuery, TError, TData>(
      ['PostQuery', variables],
      fetcher<PostQueryQuery, PostQueryQueryVariables>(PostQueryDocument, variables),
      options
    );
export const PublishMutationDocument = `
    mutation PublishMutation($postId: String!) {
  publish(postId: $postId) {
    id
    title
    content
    published
    author {
      id
      name
    }
  }
}
    `;
export const usePublishMutationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<PublishMutationMutation, TError, PublishMutationMutationVariables, TContext>) =>
    useMutation<PublishMutationMutation, TError, PublishMutationMutationVariables, TContext>(
      (variables?: PublishMutationMutationVariables) => fetcher<PublishMutationMutation, PublishMutationMutationVariables>(PublishMutationDocument, variables)(),
      options
    );
export const DeleteMutationDocument = `
    mutation DeleteMutation($postId: String!) {
  deletePost(postId: $postId) {
    id
    title
    content
    published
    author {
      id
      name
    }
  }
}
    `;
export const useDeleteMutationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteMutationMutation, TError, DeleteMutationMutationVariables, TContext>) =>
    useMutation<DeleteMutationMutation, TError, DeleteMutationMutationVariables, TContext>(
      (variables?: DeleteMutationMutationVariables) => fetcher<DeleteMutationMutation, DeleteMutationMutationVariables>(DeleteMutationDocument, variables)(),
      options
    );
export const CreateDraftMutationDocument = `
    mutation CreateDraftMutation($title: String!, $content: String, $authorEmail: String!) {
  createDraft(title: $title, content: $content, authorEmail: $authorEmail) {
    id
    title
    content
    published
    author {
      id
      name
    }
  }
}
    `;
export const useCreateDraftMutationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateDraftMutationMutation, TError, CreateDraftMutationMutationVariables, TContext>) =>
    useMutation<CreateDraftMutationMutation, TError, CreateDraftMutationMutationVariables, TContext>(
      (variables?: CreateDraftMutationMutationVariables) => fetcher<CreateDraftMutationMutation, CreateDraftMutationMutationVariables>(CreateDraftMutationDocument, variables)(),
      options
    );
export const DraftsQueryDocument = `
    query DraftsQuery {
  drafts {
    id
    title
    content
    published
    author {
      id
      name
    }
  }
}
    `;
export const useDraftsQueryQuery = <
      TData = DraftsQueryQuery,
      TError = unknown
    >(
      variables?: DraftsQueryQueryVariables,
      options?: UseQueryOptions<DraftsQueryQuery, TError, TData>
    ) =>
    useQuery<DraftsQueryQuery, TError, TData>(
      variables === undefined ? ['DraftsQuery'] : ['DraftsQuery', variables],
      fetcher<DraftsQueryQuery, DraftsQueryQueryVariables>(DraftsQueryDocument, variables),
      options
    );
export const FeedQueryDocument = `
    query FeedQuery {
  feed {
    id
    title
    content
    published
    author {
      id
      name
    }
  }
}
    `;
export const useFeedQueryQuery = <
      TData = FeedQueryQuery,
      TError = unknown
    >(
      variables?: FeedQueryQueryVariables,
      options?: UseQueryOptions<FeedQueryQuery, TError, TData>
    ) =>
    useQuery<FeedQueryQuery, TError, TData>(
      variables === undefined ? ['FeedQuery'] : ['FeedQuery', variables],
      fetcher<FeedQueryQuery, FeedQueryQueryVariables>(FeedQueryDocument, variables),
      options
    );
export const SignupMutationDocument = `
    mutation SignupMutation($name: String, $email: String!) {
  signupUser(name: $name, email: $email) {
    id
    name
    email
  }
}
    `;
export const useSignupMutationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SignupMutationMutation, TError, SignupMutationMutationVariables, TContext>) =>
    useMutation<SignupMutationMutation, TError, SignupMutationMutationVariables, TContext>(
      (variables?: SignupMutationMutationVariables) => fetcher<SignupMutationMutation, SignupMutationMutationVariables>(SignupMutationDocument, variables)(),
      options
    );