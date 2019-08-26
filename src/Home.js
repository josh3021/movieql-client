import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';

import styled, { css, ThemeProvider } from 'styled-components';

const Home = () => (
  <Wrapper>
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return <h2>loading...</h2>;
        else if (error) return <h1>umm.. Error Occured</h1>;

        if (data) {
          return data.movies.map(movie => (
            <Card key={movie.id}>
              <img
                src={movie.medium_cover_image}
                width={200}
                height={300}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
              {movie.genres.map((genre, index) => (
                <h6 key={index}>{genre}</h6>
              ))}
              {movie.rating}
            </Card>
          ));
        }
      }}
    </Query>
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2.5%;
  grid-template: repeat(5, 1fr) / repeat(4, 1fr);
  grid-auto-flow: row;
  padding: 3%;
`;

const Card = styled.div`
  background-color: silver;
`;

export default Home;
