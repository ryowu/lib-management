import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: any;
  Date: any;
};

export type Book = Node & {
  __typename?: 'Book';
  author: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  publishDate: Scalars['Date'];
  status: Scalars['String'];
};

/** A condition to be used against `Book` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BookCondition = {
  /** Checks for equality with the object’s `author` field. */
  author?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `publishDate` field. */
  publishDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Book` */
export type BookInput = {
  author: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  publishDate: Scalars['Date'];
  status?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `Book`. Fields that are set will be updated. */
export type BookPatch = {
  author?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  publishDate?: InputMaybe<Scalars['Date']>;
  status?: InputMaybe<Scalars['String']>;
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
  AuthorAsc = 'AUTHOR_ASC',
  AuthorDesc = 'AUTHOR_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PublishDateAsc = 'PUBLISH_DATE_ASC',
  PublishDateDesc = 'PUBLISH_DATE_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC'
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

/** All input for the `deleteBookById` mutation. */
export type DeleteBookByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteBook` mutation. */
export type DeleteBookInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Book` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Book` mutation. */
export type DeleteBookPayload = {
  __typename?: 'DeleteBookPayload';
  /** The `Book` that was deleted by this mutation. */
  book?: Maybe<Book>;
  /** An edge for our `Book`. May be used by Relay 1. */
  bookEdge?: Maybe<BooksEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedBookId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Book` mutation. */
export type DeleteBookPayloadBookEdgeArgs = {
  orderBy?: InputMaybe<Array<BooksOrderBy>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Book`. */
  createBook?: Maybe<CreateBookPayload>;
  /** Deletes a single `Book` using its globally unique id. */
  deleteBook?: Maybe<DeleteBookPayload>;
  /** Deletes a single `Book` using a unique key. */
  deleteBookById?: Maybe<DeleteBookPayload>;
  /** Updates a single `Book` using its globally unique id and a patch. */
  updateBook?: Maybe<UpdateBookPayload>;
  /** Updates a single `Book` using a unique key and a patch. */
  updateBookById?: Maybe<UpdateBookPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBookArgs = {
  input: CreateBookInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookArgs = {
  input: DeleteBookInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookByIdArgs = {
  input: DeleteBookByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookByIdArgs = {
  input: UpdateBookByIdInput;
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
  /** Reads a single `Book` using its globally unique `ID`. */
  book?: Maybe<Book>;
  bookById?: Maybe<Book>;
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
export type QueryBookArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};

/** All input for the `updateBookById` mutation. */
export type UpdateBookByIdInput = {
  /** An object where the defined keys will be set on the `Book` being updated. */
  bookPatch: BookPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `updateBook` mutation. */
export type UpdateBookInput = {
  /** An object where the defined keys will be set on the `Book` being updated. */
  bookPatch: BookPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Book` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Book` mutation. */
export type UpdateBookPayload = {
  __typename?: 'UpdateBookPayload';
  /** The `Book` that was updated by this mutation. */
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


/** The output of our update `Book` mutation. */
export type UpdateBookPayloadBookEdgeArgs = {
  orderBy?: InputMaybe<Array<BooksOrderBy>>;
};

export type AllBooksQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type AllBooksQuery = { __typename?: 'Query', books?: { __typename?: 'BooksConnection', totalCount: number, nodes: Array<{ __typename?: 'Book', id: number, name: string, author: string, publishDate: any, status: string } | null> } | null };

export type GetBookByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetBookByIdQuery = { __typename?: 'Query', book?: { __typename?: 'Book', id: number, name: string, author: string, publishDate: any, status: string, description?: string | null } | null };


export const AllBooksDocument = gql`
    query AllBooks($first: Int, $offset: Int) {
  books: allBooks(first: $first, offset: $offset) {
    nodes {
      id
      name
      author
      publishDate
      status
    }
    totalCount
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
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useAllBooksQuery(baseOptions?: Apollo.QueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBooksQuery, AllBooksQueryVariables>(AllBooksDocument, options);
      }
export function useAllBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBooksQuery, AllBooksQueryVariables>(AllBooksDocument, options);
        }
export type AllBooksQueryHookResult = ReturnType<typeof useAllBooksQuery>;
export type AllBooksLazyQueryHookResult = ReturnType<typeof useAllBooksLazyQuery>;
export type AllBooksQueryResult = Apollo.QueryResult<AllBooksQuery, AllBooksQueryVariables>;
export const GetBookByIdDocument = gql`
    query GetBookById($id: Int!) {
  book: bookById(id: $id) {
    id
    name
    author
    publishDate
    status
    description
  }
}
    `;

/**
 * __useGetBookByIdQuery__
 *
 * To run a query within a React component, call `useGetBookByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBookByIdQuery, GetBookByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookByIdQuery, GetBookByIdQueryVariables>(GetBookByIdDocument, options);
      }
export function useGetBookByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookByIdQuery, GetBookByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookByIdQuery, GetBookByIdQueryVariables>(GetBookByIdDocument, options);
        }
export type GetBookByIdQueryHookResult = ReturnType<typeof useGetBookByIdQuery>;
export type GetBookByIdLazyQueryHookResult = ReturnType<typeof useGetBookByIdLazyQuery>;
export type GetBookByIdQueryResult = Apollo.QueryResult<GetBookByIdQuery, GetBookByIdQueryVariables>;