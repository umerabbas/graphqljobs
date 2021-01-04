import React from "react";
import {} from "@apollo/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jobs from "./../../components/Jobs";
import JobDetail from "./../../components/JobDetail";

const client = new ApolloClient({
  uri: "https://api.graphql.jobs/",
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/job/:companySlug/:jobSlug" children={<JobDetail />} />
            <Route path="/">
              <Jobs />
            </Route>  
            <Route path="*">
              <h1>invalid URL</h1>
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
