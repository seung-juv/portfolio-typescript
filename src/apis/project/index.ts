import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects($maxResults: Int) {
    projects(maxResults: $maxResults) {
      projects {
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
      error
    }
  }
`;
