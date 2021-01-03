import React, {useState} from "react";
import JobCard from "./JobCard/Index";
import { useQuery } from "@apollo/client";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faSearch } from "@fortawesome/free-solid-svg-icons";
import {GQL_JOBS} from "./../../queries";

const Jobs = () => {
  let filteredJobs = [];
  const [search, setSearch] = useState("");
  const { loading, error, data } = useQuery(GQL_JOBS);

  if (loading) {
    return (
      <div className="m-auto" style={{ width: "100px" }}>
        <FontAwesomeIcon icon={faCircleNotch} size="6x" spin></FontAwesomeIcon>
      </div>
    );
  }

  if (error) return <p>There is an error while fetching data from API. Please check your internet connection</p>;
  
  
  // const searchJob = (event) =>
  // {
  //    event.persist();
  if (search.trim() == "") {
    filteredJobs = data.jobs;    
  }else{
    filteredJobs = data.jobs.filter(each => {
      return each.title.toLowerCase().includes(search) || each.company.name.toLowerCase().includes(search);
    });
  }
  // }

  return (
    <div>
      <InputGroup className="mt-2 mb-2">
        <InputGroupAddon addonType="prepend">
           <InputGroupText><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></InputGroupText>
        </InputGroupAddon>
        <Input placeholder="type to search" onChange={(e)=>setSearch(e.target.value)}/>
      </InputGroup>
      <div className="border">
        {filteredJobs.map((each) => (
          <JobCard key={each.id} job={each} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
