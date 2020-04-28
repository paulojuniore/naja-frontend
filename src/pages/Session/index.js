import React, {useState, useEffect} from 'react';
import Header from '../Header';
import './styles.css';
import api from '../../services/api';
import ProductIcon from '../../assets/product-icon.png';

import { Link } from 'react-router-dom';

import { MdDelete, MdEdit } from 'react-icons/md';

export default function Session() {
  const [itens, setItens] = useState([])  


  useEffect(()=> {
    api.get('/itens' ).then(response => {  
      setItens(response.data);
    });

  },[]);

  return (
    <>
    <Header />
    <div className="container">
      <Link 
        className='btn btn-primary' 
        to='/product-register'
        style={{ marginTop: 25 }}>Cadastrar novo produto</Link>
      <div> 
        <div> <p>
          </p> </div>
        <Link 
          className='btn btn-primary' 
          to='/list/category'> Buscar</Link>
      </div>
      <ul className="container-products">
       {itens.map(item => (
          <li key={item._id}>
            <div className="box-product">
              <Link to='/edit/'>
                <div className="buttons-container">
                  <button>
                    <MdEdit />
                  </button>
                  <button>
                    <MdDelete />
                  </button>
                </div>
                <div className="img">
                  <img src={ProductIcon} alt="" className="product-img"/>
                </div>
                <p style={{marginTop: 5, fontWeight: "bold"}}>{item.name}</p>
                <p><b>Quantidade:</b> {item.amount}</p> 
                <p><b>Categoria</b> {item.category}</p>
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