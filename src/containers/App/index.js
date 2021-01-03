import React from "react";
import Job from "./../../components/Jobs";
import {} from "@apollo/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.graphql.jobs/",
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Job />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
