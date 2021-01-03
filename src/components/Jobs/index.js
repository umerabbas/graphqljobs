import React from "react";
import JobCard from "./JobCard/Index";
import { useQuery, gql } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const EXCHANGE_RATES = gql`
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

const Jobs = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) {
    return (
      <div className="m-auto" style={{ width: "100px" }}>
        <FontAwesomeIcon icon={faCircleNotch} size="6x" spin></FontAwesomeIcon>
      </div>
    );
  }
  if (error) return <p>There is an error while fetching data from API. Please check your internet connection</p>;

  return (
    <div className="border">
      {data.jobs.map((each) => (
        <JobCard key={each.id} job={each} />
      ))}
    </div>
  );
};

export default Jobs;
