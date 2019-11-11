import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import { LRCard } from '../Components';

export const CHARACTERS_QUERY = gql`
  query AllPeople($perPage: Int!, $after: String) {
    allPeople(first: $perPage, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          image
        }
      }
    }
  }
`;

export const Characters = () => {
  const { data, loading, error, fetchMore } = useQuery(CHARACTERS_QUERY, {
    variables: { perPage: 12 },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const {
    allPeople: { edges, pageInfo },
  } = data;

  const loadMore = () => {
    fetchMore({
      variables: {
        after: pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { allPeople: allPeopleNew } }) => {
        if (!allPeopleNew.edges.length) {
          return prev;
        }

        return {
          allPeople: {
            ...allPeopleNew,
            edges: [...prev.allPeople.edges, ...allPeopleNew.edges],
          },
        };
      },
    });
  };

  return (
    <main className="characters-main">
      <div className="characters-list">
        {edges.map(ed => (
          <LRCard
            item={ed.node}
            key={ed.node.id}
            page="characters"
            size="small-lr-card"
          />
        ))}
      </div>
      {pageInfo.hasNextPage && (
        <button className="load-more-button" onClick={loadMore}>
          Load more
        </button>
      )}
    </main>
  );
};
