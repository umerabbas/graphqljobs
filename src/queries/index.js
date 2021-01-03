import { useQuery, gql } from "@apollo/client";


export const GQL_JOBS = gql`
  query {
    jobs {
      id
      title
      postedAt
      company {
        name
      }
      userEmail
      applyUrl
      description
    }
  }
`;