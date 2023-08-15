import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav'>
        <Link className='nav-buttons' to={'/'}>Home</Link>
        <Link className='nav-buttons' to={'/list'}>Lista de Objetos</Link>
        <Link className='nav-buttons' to={'/image'}>Imagen por ID</Link>
        <Link className='nav-buttons' to={'/grayscale'}>Imágen aleatoria en escala de grises</Link>
        <Link className='nav-buttons' to={'/favorites'}>CRUD de Favoritos</Link>
    </nav>
  )
}

export default Navbar