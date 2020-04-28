import React, {useState} from 'react';
import Header from '../Header';
import './styles.css';
import api from '../../services/api';
import ProductIcon from '../../assets/product-icon.png';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Session() {
  const [itens, setItens] = useState([]);
  const [category, setCategory] = useState([]); 


  async function handleCategory(e){
    e.preventDefault();
 
    try {
      const response = await api.get(`/itens/`);
      setItens(response.data.filter(response => response.category === category.toLowerCase()));
    
      console.log(response.data);
     
    } catch (err) {
      alert('Falha no registro, tente novamente!');
    }
  }


  
  return (
    <>
    <Header />
    <div className="container">
      <Link 
        className='btn btn-primary' 
        to='/product-register'
        style={{ marginTop: 25 }}>Cadastrar novo produto</Link>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Pesquisar por categoria..."
          value = {category}
          onChange = {e => setCategory(e.target.value)}

          style={{marginTop: 30, maxWidth: 1100}} />
      </div>
      <div> 
        <Button 
          className='btn btn-primary' 
          type= 'submit'
          onClick = {handleCategory}
          > Buscar</Button>
      </div>
      <ul className="container-products">
       {itens.map(item => (
          <li key={item._id}>
          <div className="box-product">
            <Link to='/edit/'>
              <div className="img">
                <img src={ProductIcon} alt="" className="product-img"/>
              </div>
              <p style={{marginTop: 5, fontWeight: "bold"}}>{item.name}</p>
              <p><b>Quantidade:</b> {item.amount} </p>
              <p><b>R$</b> {item.value}</p>
            </Link>
          </div>
        </li>
       ))}
      </ul>
    </div>
    </>
  )
}