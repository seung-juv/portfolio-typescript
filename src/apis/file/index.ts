import { gql } from '@apollo/client';

export const GET_FILE = gql`
  query GetFile($id: Int!) {
    GetFile(id: $id) {
      id
      url
      filename
      mimetype
      createdAt
    }
  }
`;
