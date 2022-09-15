import { gql } from "@apollo/client";

export const QUERY_LAUNCH_LIST = gql`
  query listHackathons {
    listHackathons {
      items {
        id
        data
      }
    }
  }
`;
