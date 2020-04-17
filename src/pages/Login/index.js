import React, { useState } from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div className='login-container'>
      <section className='form'>
        <form onSubmit={handleLogin}>
          <h1>Naja Store</h1>
          <h1>Faça seu login, administrador!</h1>
          <input 
            placeholder='Seu e-mail'
            value={email}
            onChange={e => setEmail(e.target.value)} />

          <input
            placeholder='Sua senha'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)} />
          
          <button className='button' type='submit'>Entrar</button>

          <Link style={{marginTop: 10}} className='link-register' to='/register'>
            Cadastre-se
          </Link>
        </form>
      </section>
    </div>
  )
}