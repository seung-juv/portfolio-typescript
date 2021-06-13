import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects($maxResults: Int) {
    GetProjects(maxResults: $maxResults) {
      id
      accountId
      createdAt
      updatedAt
      type
      platform
      title
      caption
      meta
      thumbnail
      github
      page
      tools
      startAt
      endAt
    }
  }
`;
