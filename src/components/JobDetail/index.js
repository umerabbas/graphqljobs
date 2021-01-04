import React from "react";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@apollo/client";
import {GQL_JOB} from "./../../queries";

import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


const JobDetail = () => {
   let { companySlug, jobSlug } = useParams();
   const { loading, error, data } = useQuery(GQL_JOB,{
     variables: { companySlug, jobSlug },
   });

   if (loading) {
    return (
      <div className="m-auto" style={{ width: "100px" }}>
        <FontAwesomeIcon icon={faCircleNotch} size="6x" spin></FontAwesomeIcon>
      </div>
    );
  }

  if (error) return <p>Job not found.</p>;

   
  let job = data.job;

  return (
    <Row>
      <Col md={1}>
        <Link to="/" style={{ textDecoration: 'none' }} >
          <FontAwesomeIcon icon={faArrowLeft} ></FontAwesomeIcon>
        </Link>
      </Col>
      <Col md={11}>
        <Form className="border p-3">
          <FormGroup row>
            <Label sm={2}>Job Title:</Label>
            <Col sm={10}>
              <Input value={job.title} disabled/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Company Name:</Label>
            <Col sm={10}>
              <Input value={job.company.name} disabled/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Uploaded By:</Label>
            <Col sm={10}>
              <Input value={job.userEmail} disabled/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Job Title</Label>
            <Col sm={10}>
              <Input value={job.title} disabled/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Posted Date</Label>
            <Col sm={10}>
              <Input value={moment().format("DD-MM-YYYY")} disabled/>
            </Col>
          </FormGroup>
          <FormGroup className="mb-0" row>
            <Label sm={2}>Description:</Label>
            <Col sm={10}>
              <Input type="textarea" rows={4} value={job.description} disabled/>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default JobDetail