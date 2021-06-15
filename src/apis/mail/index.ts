import { gql } from '@apollo/client';

export const SEND_MAIL = gql`
  mutation SendMail($from: String!, $to: String!, $subject: String!, $text: String!) {
    SendMail(from: $from, to: $to, subject: $subject, text: $text)
  }
`;
