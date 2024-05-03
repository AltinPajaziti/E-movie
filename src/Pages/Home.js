import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../Components/Header';
import { Sllajderi } from '../Components/Sllajderi';
import { LatestProducts } from '../Components/LatestProducts';
import { About } from '../Components/About';
import { Footer } from '../Components/Footer';

export function Home() {
  const API_KEY = 'api_key=c1ec96377a8ab2abee0c9ae4f43861cd';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL = `${BASE_URL}/discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        // Ensure that the response contains the expected structure
        if (response.data && response.data.results) {
          // Select the first four movies from the response
          const firstFourMovies = response.data.results.slice(0, 4);
          setMovies(firstFourMovies);
        } else {
          console.error('Unexpected API response structure:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [API_URL]);

  return (
    <>
      <Header />
      <Sllajderi />
      <LatestProducts movies={movies} />
      <About />
      <Footer />
    </>
  );
}
