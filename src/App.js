import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./apolloClient";

import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <React.Fragment>
          <Route exact path={"/"} component={Home} />
          <Route path={"/details/:movieId"} component={Detail} />
        </React.Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
