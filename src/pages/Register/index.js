import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register-container">
      <section className="form">
        <form>
          <h1>Cadastro - Naja Store</h1>

          <label className='register-title'>Nome *</label>
          <input
            placeholder='Digite seu nome' />

          <label className='register-title'>Email *</label>
          <input
            placeholder='Digite seu email' />

          <label className='register-title'>Senha *</label>
          <input 
            placeholder='Digite sua senha' />

          <input
            placeholder='Confirme sua senha' />
          
          <button className='button' type='submit'>Cadastrar</button>

          <Link style={{marginTop: 10}} className='link-register' to='/'>
            Já tenho uma conta
          </Link>
        </form>
      </section>
    </div>
  )
}