import React, { useState } from 'react';
import Header from '../Header';

import './styles.css';

export default function EditProduct() {
  const [count, setCount] = useState(0);

  function handleSubtraction(e) {
    e.preventDefault();
    if(count === 0) {
      alert('Quantidades negativas não permitidas!');
    } else {
      setCount(count - 1);
    }
  }

  function handleSum(e) {
    e.preventDefault();
    setCount(count + 1);
  }

  return (
    <>
      <Header />
      <div className="container">
        <h4 style={{marginTop: 20, textAlign: "center"}}>Editar Produto</h4>
        <form>
          <p>Valor atual do produto: R$ ??</p>
          <input 
            placeholder="Novo valor do produto em R$"/>
          <p>Quantidade em estoque:</p>
          <div className="increment-group">
            <button 
              className="btn-increment"
              onClick={handleSubtraction}>-</button>
            <p>{count}</p>
            <button 
              className="btn-increment"
              onClick={handleSum}>+</button>
          </div>
        </form>
      </div>
    </>
  )
}