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

  async function handleDelete(id){
    try{

    await api.delete(`itens/${id}`)

     setItens(itens.filter(item => item._id !== id));

    }catch(err){
      alert('Erro ao deletar')
    }
  }


  async function handleUpdate(item){
  }

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
              <Link >
                <div className="buttons-container">
                  <button onClick={() => handleUpdate(item)}>
                    <MdEdit />
                  </button>
                  <button onClick={()=> handleDelete(item._id)}>
                    <MdDelete />

                  </button>
                </div>
                <div className="img">
                  <img src={ProductIcon} alt="" className="product-img"/>
                </div >
                <div style={{fontSize:10, marginTop: 1} }>
                <p style={{marginTop: 2, fontWeight: "bold"}}>{item.name}</p>
                <p> <b>Quantidade: </b> {item.amount} </p>
                <p><b>Categoria </b> {item.category} </p>
                <p><b>R$</b> {item.value}</p>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}