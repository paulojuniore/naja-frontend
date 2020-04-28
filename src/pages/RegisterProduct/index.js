import React, {useState} from 'react';
import Header from '../Header';
import {useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api'

export default function RegisterProduct() {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  async function handleProduct(e){
    e.preventDefault();

    try{
      const response = await api.post('/itens',{
        name,
        category,
        amount,
        value
      });

      history.push('/session')

      console.log(response);

    } catch(err){
      alert('falha ao cadastrar o item');
    }

  }
  return (
    <>
      <Header />
      <div className="container">
        <h1 style={{marginTop: 25}}>Cadastrar produto</h1>
        <form onSubmit={handleProduct}>
          <p className="labels">Nome do produto:</p>
          <input 
          type="text" 
          placeholder="Nome do produto" 
          value = {name}
          onChange ={e =>setName(e.target.value)}
          />

          <p className="labels">Categoria:</p>
          <input 
          type="text" 
          placeholder="Categoria do produto" 
          value ={category}
          onChange = {e=> setCategory(e.target.value)}
          />
          
          <p  className="labels">Quantidade em estoque:</p>
          <input 
          type="number" 
          placeholder="Quantidade em estoque" 
          value = {amount}
          onChange = {e=> setAmount(e.target.value)}
          />

          <p className="labels">Valor em R$:</p>
          <input 
          type="number" 
          placeholder="Valor em R$" 
          value = {value}
          onChange = {e=> setValue(e.target.value)}
          />

          <button 
            type="submit" 
            className="btn btn-primary"
            style={{marginTop: 20}}>Cadastrar
            </button> 
        </form>
      </div>
    </>
  )
}