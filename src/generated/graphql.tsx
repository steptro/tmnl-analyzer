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
  AWSJSON: any;
};

export type CreateHackathonInput = {
  data?: InputMaybe<Scalars['AWSJSON']>;
};

export type DeleteHackathonInput = {
  id: Scalars['ID'];
};

export type Hackathon = {
  __typename?: 'Hackathon';
  data?: Maybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
};

export type HackathonConnection = {
  __typename?: 'HackathonConnection';
  items?: Maybe<Array<Maybe<Hackathon>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHackathon?: Maybe<Hackathon>;
  deleteHackathon?: Maybe<Hackathon>;
  updateHackathon?: Maybe<Hackathon>;
};


export type MutationCreateHackathonArgs = {
  input: CreateHackathonInput;
};


export type MutationDeleteHackathonArgs = {
  input: DeleteHackathonInput;
};


export type MutationUpdateHackathonArgs = {
  input: UpdateHackathonInput;
};

export type Query = {
  __typename?: 'Query';
  getHackathon?: Maybe<Hackathon>;
  listHackathons?: Maybe<HackathonConnection>;
};


export type QueryGetHackathonArgs = {
  id: Scalars['ID'];
};


export type QueryListHackathonsArgs = {
  filter?: InputMaybe<TableHackathonFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateHackathon?: Maybe<Hackathon>;
  onDeleteHackathon?: Maybe<Hackathon>;
  onUpdateHackathon?: Maybe<Hackathon>;
};


export type SubscriptionOnCreateHackathonArgs = {
  data?: InputMaybe<Scalars['AWSJSON']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionOnDeleteHackathonArgs = {
  data?: InputMaybe<Scalars['AWSJSON']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionOnUpdateHackathonArgs = {
  data?: InputMaybe<Scalars['AWSJSON']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type TableBooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type TableFloatFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notContains?: InputMaybe<Scalars['Float']>;
};

export type TableHackathonFilterInput = {
  id?: InputMaybe<TableIdFilterInput>;
};

export type TableIdFilterInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
};

export type TableIntFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notContains?: InputMaybe<Scalars['Int']>;
};

export type TableStringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
};

export type UpdateHackathonInput = {
  data?: InputMaybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
};

export type ListHackathonsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListHackathonsQuery = { __typename?: 'Query', listHackathons?: { __typename?: 'HackathonConnection', items?: Array<{ __typename?: 'Hackathon', id: string, data?: any | null } | null> | null } | null };


export const ListHackathonsDocument = gql`
    query listHackathons {
  listHackathons {
    items {
      id
      data
    }
  }
}
    `;

/**
 * __useListHackathonsQuery__
 *
 * To run a query within a React component, call `useListHackathonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListHackathonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListHackathonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListHackathonsQuery(baseOptions?: Apollo.QueryHookOptions<ListHackathonsQuery, ListHackathonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListHackathonsQuery, ListHackathonsQueryVariables>(ListHackathonsDocument, options);
      }
export function useListHackathonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListHackathonsQuery, ListHackathonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListHackathonsQuery, ListHackathonsQueryVariables>(ListHackathonsDocument, options);
        }
export type ListHackathonsQueryHookResult = ReturnType<typeof useListHackathonsQuery>;
export type ListHackathonsLazyQueryHookResult = ReturnType<typeof useListHackathonsLazyQuery>;
export type ListHackathonsQueryResult = Apollo.QueryResult<ListHackathonsQuery, ListHackathonsQueryVariables>;