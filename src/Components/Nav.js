import React, { useEffect } from 'react'
import { Header } from './Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export  function Nav() {
  const [produktet ,rritnumrin] = useState(0)

  useEffect(()=>{
    rritnumrin(localStorage.getItem('cart') === null ? 0 : JSON.parse(localStorage.getItem('cart')).length)
  },[])


  return (
    <div className='navi'>
        <ul>
            <li><Link to="/" className='linkk'>Home </Link></li>
            <li><Link to="/Products" className='linkk'>Products</Link></li>
            

            
            <li><Link to="/Products" className='linkk'>About</Link></li>
            <li><Link to="/Cart" className='linkk'>Cart({produktet-1})</Link></li>
            

        </ul>

    
    </div>
  )
}
