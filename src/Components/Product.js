import React, { useState, useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { useParams } from "react-router-dom";
import axios from 'axios';
import noimg from '../noimg.png'






export function Product() {
  const { id } = useParams()
  const API_KEY = 'api_key=3e52e2f5350ae60de5e2fc58e818d2a0'
  const BASE_URL = 'https://api.themoviedb.org/3'
  const API_URL = `${BASE_URL}/movie/${id}?${API_KEY}`
  const [tedhenat, Shtotedhena] = useState({});
  const [imazhi, ndrroimazhin] = useState(`https://image.tmdb.org/t/p/w500`)
  const [cart, shtoiteam] = useState([])
  const [mesazhi, ndrysho] = useState('')

  function submithendeler(e) {
    e.preventDefault();
    let produkti = {};
    const formData = new FormData(e.target);
    const forma = document.getElementById('t')

    const sasia = formData.get("sasia");
    const titulli = formData.get('titulli')
    const qmimi = formData.get('qmimi')

    if (sasia >= 1) {
      produkti = {
        id: id,
        sasia: parseInt(sasia),
        titulli: titulli,
        qmimi: qmimi
      };
    }
    let cart_items = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))


    let found = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === produkti.id) {
        cart[i].sasia += produkti.sasia;
        found = !found;
        ndrysho("Product added to cart")
        forma.value = ''
        break;
      }
    }

    if (!found) {
      cart_items.push(produkti)
      shtoiteam([...cart, produkti]);
      ndrysho("product added to cart")
      forma.value = ''
    }


    localStorage.setItem('cart', JSON.stringify(cart_items))





  }

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {

        Shtotedhena(response.data)
      })
      .catch(e => { console.log(e) })





  }, [])
  const [funksioni, ndryshofk] = useState(Math.floor(Math.random() * 100) + 1)





  return (
    <>



      <Header />
      <div className='productdiv'>

        {

          (tedhenat.poster_path) ? <img src={imazhi + tedhenat.poster_path} onError={noimg}
            alt={tedhenat.title} style={{ 'width': 'auto', 'height': '300px' }} /> : <img src={noimg} alt={tedhenat.title} style={{width:'200px'}}/>
        }

        <div className='productdivndimsi'>
          <form action="#" onSubmit={submithendeler}>
            <h2>{tedhenat.title}</h2>
            <br />
            <p>{tedhenat.overview}</p>
            <br />
            <p><b>Release Date</b></p>
            <br />
            <p>{tedhenat.release_date}</p>
            <br />
            <h4>Price: {funksioni} €</h4>

            <input type='hidden' value={tedhenat.title} name='titulli'></input>
            <br />
            <input type='hidden' value={funksioni} name='qmimi'></input>
            <input type="number" name='sasia' id='t'></input>
            <button type='submit'>Submit</button>
          </form>
          <p>{mesazhi}</p>


        </div>

      </div>
      <Footer />
    </>



  )
}

