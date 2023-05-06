import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: any;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

/** A condition to be used against `Book` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BookCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Book` */
export type BookInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Book` values. */
export type BooksConnection = {
  __typename?: 'BooksConnection';
  /** A list of edges which contains the `Book` and cursor to aid in pagination. */
  edges: Array<BooksEdge>;
  /** A list of `Book` objects. */
  nodes: Array<Maybe<Book>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Book` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Book` edge in the connection. */
export type BooksEdge = {
  __typename?: 'BooksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Book` at the end of the edge. */
  node?: Maybe<Book>;
};

/** Methods to use when ordering `Book`. */
export enum BooksOrderBy {
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  NATURAL = 'NATURAL',
}

/** All input for the create `Book` mutation. */
export type CreateBookInput = {
  /** The `Book` to be created by this mutation. */
  book: BookInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Book` mutation. */
export type CreateBookPayload = {
  __typename?: 'CreateBookPayload';
  /** The `Book` that was created by this mutation. */
  book?: Maybe<Book>;
  /** An edge for our `Book`. May be used by Relay 1. */
  bookEdge?: Maybe<BooksEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Book` mutation. */
export type CreateBookPayloadBookEdgeArgs = {
  orderBy?: InputMaybe<Array<BooksOrderBy>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Book`. */
  createBook?: Maybe<CreateBookPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBookArgs = {
  input: CreateBookInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Book`. */
  allBooks?: Maybe<BooksConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllBooksArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<BookCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BooksOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};

export type AllBooksQueryVariables = Exact<{ [key: string]: never }>;

export type AllBooksQuery = {
  __typename?: 'Query';
  allBooks?: {
    __typename?: 'BooksConnection';
    nodes: Array<{
      __typename?: 'Book';
      id: number;
      name?: string | null;
    } | null>;
  } | null;
};

export const AllBooksDocument = gql`
  query AllBooks {
    allBooks {
      nodes {
        id
        name
      }
    }
  }
`;

/**
 * __useAllBooksQuery__
 *
 * To run a query within a React component, call `useAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<AllBooksQuery, AllBooksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllBooksQuery, AllBooksQueryVariables>(
    AllBooksDocument,
    options
  );
}
export function useAllBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllBooksQuery,
    AllBooksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllBooksQuery, AllBooksQueryVariables>(
    AllBooksDocument,
    options
  );
}
export type AllBooksQueryHookResult = ReturnType<typeof useAllBooksQuery>;
export type AllBooksLazyQueryHookResult = ReturnType<
  typeof useAllBooksLazyQuery
>;
export type AllBooksQueryResult = Apollo.QueryResult<
  AllBooksQuery,
  AllBooksQueryVariables
>;
