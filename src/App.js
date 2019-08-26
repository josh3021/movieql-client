import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { HashRouter as Router, Route } from 'react-router-dom';
import client from './apolloClient';

import styled, {
  createGlobalStyle,
  css,
  ThemeProvider
} from 'styled-components';

import Home from './Home';
import Detail from './Detail';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Router>
            <React.Fragment>
              <Route exact path={'/'} component={Home} />
              <Route path={'/details/:movieId'} component={Detail} />
            </React.Fragment>
          </Router>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export default App;
