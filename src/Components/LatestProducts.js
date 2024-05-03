import React, { useState } from 'react';
import noimg from '../noimg.png';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function LatestProducts({ movies }) {
  const [imazhi, ndrroimazhin] = useState('https://image.tmdb.org/t/p/w500');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ndryshoni këtë vlerë sipas preferencave tuaja
    slidesToScroll: 1,
  };

  return (
    <div className='lp' >
      <div className="bg-primary p-60" style={{backgroundColor:'black'}}>
        <div className="container-column">
          <h2 className="text-center" style={{ textAlign: 'center' ,color:'white'}}>
            Latest Movies
          </h2>
          <Slider {...sliderSettings}>
            {movies &&
              movies.map((e, index) => (
                <div className="product" key={index}>
                  {e.poster_path ? (
                    <img
                      src={imazhi +e.poster_path}
                      alt=""
                      onError={noimg}
                      style={{
                        height: 'auto',
                        width : '170px',
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom:'10px'
                        
                      }}
                    />
                  ) : (
                    <img
                      src={imazhi + e.backdrop_path}
                      alt=""
                      style={{ height: 'auto', width: '150px' }}
                    />
                  )}

                  <div className="details">
                    <h3 style={{ marginBottom: '10px',color:'white' }}>{e.title}</h3>
                    <br />
                    <Link to={`Product/${e.id}`}>Details</Link>
                  </div>
                  
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <hr style={{filter :'blur(2px)'}} />
    </div>
  );
}
