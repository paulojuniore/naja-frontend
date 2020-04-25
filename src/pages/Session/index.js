import React from 'react';
import Header from '../Header';
import './styles.css';

import ProductIcon from '../../assets/product-icon.png';

export default function Session() {
  return (
    <>
    <Header />
    <div className="container">
      <div className="input-group mb-3">
        <input 
          type="text" 
          class="form-control" 
          placeholder="Pesquisar por categoria..."
          style={{marginTop: 30, maxWidth: 1100}} />
      </div>
      <ul className="container-products">
        <li>
          <div className="box-product">
            <div className="img">
              <img src={ProductIcon} alt="" className="product-img"/>
            </div>
            <p style={{marginTop: 20, fontWeight: "bold"}}>Nome do produto</p>
          </div>
        </li>
        <li>
          <div className="box-product">
            <div className="img">
              <img src={ProductIcon} alt="" className="product-img"/>
            </div>
            <p style={{marginTop: 20, fontWeight: "bold"}}>Nome do produto</p>
          </div>
        </li>
        <li>
          <div className="box-product">
            <div className="img">
              <img src={ProductIcon} alt="" className="product-img"/>
            </div>
            <p style={{marginTop: 20, fontWeight: "bold"}}>Nome do produto</p>
          </div>
        </li>
        <li>
          <div className="box-product">
            <div className="img">
              <img src={ProductIcon} alt="" className="product-img"/>
            </div>
            <p style={{marginTop: 20, fontWeight: "bold"}}>Nome do produto</p>
          </div>
        </li>
        <li>
          <div className="box-product">
            <div className="img">
              <img src={ProductIcon} alt="" className="product-img"/>
            </div>
            <p style={{marginTop: 20, fontWeight: "bold"}}>Nome do produto</p>
          </div>
        </li>
        <li>
          <div className="box-product">
            <div className="img">
              <img src={ProductIcon} alt="" className="product-img"/>
            </div>
            <p style={{marginTop: 20, fontWeight: "bold"}}>Nome do produto</p>
          </div>
        </li>
        <li>
          <div className="box-product">
            <div className="img">
              <img src={ProductIcon} alt="" className="product-img"/>
            </div>
            <p style={{marginTop: 20, fontWeight: "bold"}}>Nome do produto</p>
          </div>
        </li>
        <li>
          <div className="box-product">
            <div className="img">
              <img src={ProductIcon} alt="" className="product-img"/>
            </div>
            <p style={{marginTop: 20, fontWeight: "bold"}}>Nome do produto</p>
          </div>
        </li>
        <li>
          <div className="box-product">
            <div className="img">
              <img src={ProductIcon} alt="" className="product-img"/>
            </div>
            <p style={{marginTop: 20, fontWeight: "bold"}}>Nome do produto</p>
          </div>
        </li>
        <li>
          <div className="box-product">
            <div className="img">
              <img src={ProductIcon} alt="" className="product-img"/>
            </div>
            <p style={{marginTop: 20, fontWeight: "bold"}}>Nome do produto</p>
          </div>
        </li>
      </ul>
    </div>
    </>
  )
}