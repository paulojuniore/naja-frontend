import React, { useState } from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
      passwordConfirm
    })
  }

  return (
    <div className="register-container">
      <section className="form">
        <form onSubmit={handleRegister}>
          <h1>Cadastro - Naja Store</h1>

          <label className='register-title'>Nome *</label>
          <input
            placeholder='Digite seu nome'
            value={name}
            onChange={e => setName(e.target.value)} />

          <label className='register-title'>Email *</label>
          <input
            placeholder='Digite seu email'
            value={email}
            onChange={e => setEmail(e.target.value)} />

          <label className='register-title'>Senha *</label>
          <input 
            placeholder='Digite sua senha'
            value={password}
            onChange={e => setPassword(e.target.value)} />

          <input
            placeholder='Confirme sua senha'
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)} />
          
          <button className='button' type='submit'>Cadastrar</button>

          <Link style={{marginTop: 10}} className='link-register' to='/'>
            Já tenho uma conta
          </Link>
        </form>
      </section>
    </div>
  )
}