import { useQuery, gql } from "@apollo/client";


export const GQL_JOBS = gql`
  query {
    jobs {
      id
      title
      slug
      postedAt
      company {
        name
        slug
      }
      userEmail
      applyUrl
      description
    }
  }
`;
export const GQL_JOB = gql`
  query($companySlug: String!, $jobSlug: String!) {
    job(input: {companySlug: $companySlug jobSlug: $jobSlug}) {
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