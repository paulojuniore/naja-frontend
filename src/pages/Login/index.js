import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login-container'>
      <section className='form'>
        <form action="">
          <h1>Naja Store</h1>
          <h1>Faça seu login, administrador!</h1>
          <input 
            placeholder='Seu e-mail' />

          <input
            placeholder='Sua senha'
            type='password' />
          
          <button className='button' type='submit'>Entrar</button>

          <Link style={{marginTop: 10}} className='link-register' to='/register'>
            Cadastre-se
          </Link>
        </form>
      </section>
    </div>
  )
}