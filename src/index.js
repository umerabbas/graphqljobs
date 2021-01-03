import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import App from "./containers/App";

String.prototype.trimEllip = function (length) {
  return this.length > length ? this.substring(0, length) + "..." : this;
};

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
