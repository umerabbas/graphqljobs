import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Card, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";


class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { applied: false };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(e) {
    e.preventDefault();
    window.open(this.props.job.applyUrl, "_blank");
    this.setState({ applied: true });
  }

  render() {
    return (
      <Link to={"/job/" + this.props.job.company.slug + "/" + this.props.job.slug} style={{ textDecoration: 'none' }}>
        <Card body className="m-2">
          <CardTitle tag="h4" className="font-weight-bold text-dark">{this.props.job.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {this.props.job.company.name}
          </CardSubtitle>
          <CardText className="text-justify text-dark">
            {this.props.job.description.trimEllip(175)}
          </CardText>
          <CardText>
            <small className="text-muted">
              <span className="float-left">
                <FontAwesomeIcon className="mr-1" icon={faUser}></FontAwesomeIcon>
                {this.props.job.userEmail}
              </span>
              <span className="float-right">
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                <Moment className="ml-1" format="DD-MM-YYYY">
                  {this.props.job.postedAt}
                </Moment>
              </span>
            </small>
          </CardText>
          <Button color="success" disabled={this.state.applied} onClick={this.buttonClicked}>
            {this.state.applied ? "Applied" : "Apply Now"}
            <FontAwesomeIcon className="ml-1" icon={this.state.applied ? faCheck : faArrowRight}></FontAwesomeIcon>
          </Button>
        </Card>
      </Link>
    );
  }
}

export default JobCard;
