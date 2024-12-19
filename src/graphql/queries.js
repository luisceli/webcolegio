import { gql } from "graphql-request";

export const GET_NEWS = gql`
  {
    posts {
      title
      date
      coverImage {
        url
      }
    }
    description
  }
`;
