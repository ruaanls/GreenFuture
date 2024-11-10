import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <h1>PG INICIAL</h1>
        <nav className='menu'>
            <p>Carbono</p>
            <p>Integrantes</p>
            <p>Sobre Nós</p>
        </nav>
        <div className='loginHeader'>
            <button className='botao'><p>Abra sua conta</p></button>
            <p>Login</p>
        </div>
    </header>
  )
}
