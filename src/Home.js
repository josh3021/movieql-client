import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <h2>loading...</h2>;
      else if (error) return <h1>umm.. Error Occured</h1>;

      if (data) {
        console.log(data);
        return data.movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            {movie.genres.map((genre, index) => (
              <h6 key={index}>{genre}</h6>
            ))}
            {movie.rating}
          </div>
        ));
      }
    }}
  </Query>
);

export default Home;
