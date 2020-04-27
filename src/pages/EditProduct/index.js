import React, { useState } from 'react';
import Header from '../Header';

import './styles.css';

export default function EditProduct(data) {
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
        <div className='edit-group'>
          <p className='simple-text'>Valor atual do produto: R$ ??</p>
          <input 
            placeholder="Novo valor do produto em R$"/>
          <p className='simple-text'>Quantidade em estoque:</p>
          <div className="increment-group">
            <button 
              className="btn-increment"
              onClick={handleSubtraction}
              style={{marginTop: 10}}>-</button>
            <p className='simple-text'>{count}</p>
            <button 
              className="btn-increment"
              onClick={handleSum}
              style={{marginTop: 10}}>+</button>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ marginTop: 20 }}>Alterar dados</button>
          
          <button 
            className="btn btn-primary" 
            style={{ marginTop: 20, marginLeft:20 }}>Deletar item</button>
        </div>
      </div>
    </>
  )
}