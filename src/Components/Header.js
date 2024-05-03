import React from 'react'
import LLogoja from '../LLogoja.png'
import Background from '../Background.jpg'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'



export function Header() {
  return (
    <>
        <>

        <header className='App' >

        <Link to="/" className='linkk'><img id="fotoja"src={LLogoja}></img> </Link>
        
        
        <Nav />

        </header>
        <div></div>
        </>
        
      
      </>
    
  )
}

