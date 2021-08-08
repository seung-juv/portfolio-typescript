import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects($maxResults: Int) {
    GetProjects(maxResults: $maxResults) {
      id
      accountId
      type {
        code
        label
      }
      platform {
        code
        label
      }
      title
      description
      meta
      thumbnail {
        url
      }
      github
      page
      tools {
        code
        label
      }
      startAt
      endAt
      createdAt
      updatedAt
    }
  }
`;
