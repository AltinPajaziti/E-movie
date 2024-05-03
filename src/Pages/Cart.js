import React, { useEffect, useState } from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';

export function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'));
    setCart(cartData);
  }, []);


  function deletefunction(indexii){
    alert("A jeni i sigurt?");
    const updatedCart = [...cart]; 
    updatedCart.splice(indexii, 1); 
    setCart(updatedCart); 
    localStorage.setItem('cart', JSON.stringify(updatedCart))

    
  }
  return (
    <>
      <Header />
      <table className="table" style={{border:'1px solid black'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titulli</th>
              <th scope="col">Sasia</th>
              <th scope="col">ID</th>
              <th scope='col'>Qmimi</th>
              <th scope="col">Clear</th>
            </tr>
          </thead>
      {cart.slice(1).map((item, index) => (
        
          <tbody>
            <tr>
              <th scope="row"> &bull;</th>
              <td>{item.titulli}</td>
              <td>{item.sasia}</td>
              <td>{item.id}</td>
              <td>{item.qmimi}€</td>
              <td><button type="button" className="btn btn-danger" onClick={() => { deletefunction(index) }}>Clear</button>

</td>
            </tr>
          </tbody>
        
      ))}
      </table>

      <Footer />
    </>
  );
      }