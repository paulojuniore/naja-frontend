import React from 'react';
import Header from '../Header';

import './styles.css';

export default function RegisterProduct() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 style={{marginTop: 25}}>Cadastrar produto</h1>
        <form onSubmit="">
          <p className="labels">Nome do produto:</p>
          <input type="text" placeholder="Nome do produto" />
          <p  className="labels">Quantidade em estoque:</p>
          <input type="text" placeholder="Quantidade em estoque" />
          <p className="labels">Valor em R$:</p>
          <input type="text" placeholder="Valor em R$" />
          <button 
            type="submit" 
            className="btn btn-primary"
            style={{marginTop: 20}}>Cadastrar</button> 
        </form>
      </div>
    </>
  )
}