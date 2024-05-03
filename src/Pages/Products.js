import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import noimg from '../noimg.png';
import { Link } from 'react-router-dom';

export function Products() {
  const [page, setPage] = useState(1);
  const API_KEY = 'api_key=c1ec96377a8ab2abee0c9ae4f43861cd';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_URL = `${BASE_URL}/movie/now_playing?${API_KEY}&page=${page}`;

    axios
      .get(API_URL)
      .then((response) => {
        if (response.data && response.data.results) {
          setMovies(response.data.results);
        } else {
          console.error('Unexpected API response structure:', response.data);
        }
      })
      .catch((error) => console.error(error));
  }, [page]);

  function nextPage(e) {
    e.preventDefault();
    setPage((prevPage) => prevPage + 1);
  }

  function prevPage(e) {
    e.preventDefault();
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='Productsdiv'>
          {movies.map((movie) => (
            <div key={movie.id} className='Productsdivndimsi'>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  onError={(e) => {
                    e.target.src = noimg;
                  }}
                />
              ) : (
                <img src={noimg} alt={movie.title} style={{ width: '200px', marginLeft: '45px' }} />
              )}
              <h2 style={{ color: 'white' }}>{movie.title}</h2>
              <br />
              <Link to={`/Product/${movie.id}`}>Details</Link>
            </div>
          ))}
          <div></div>
          <div className='listatspeciale'>
            <ul>
              <li>
                <a href='/' onClick={prevPage}>
                  &lt;
                </a>{' '}
                <span style={{ position: 'relative', left: '8px' }}>{page}</span>
              </li>
              <li>
                <a href='/' onClick={nextPage}>
                  &gt;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
