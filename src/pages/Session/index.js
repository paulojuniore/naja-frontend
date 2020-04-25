import React from 'react';
import Header from '../Header';
import './styles.css';

import ProductIcon from '../../assets/product-icon.png';

import { Link } from 'react-router-dom';

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
            <Link to='/edit'>
              <div className="img">
                <img src={ProductIcon} alt="" className="product-img"/>
              </div>
              <p style={{marginTop: 10, fontWeight: "bold"}}>Nome do produto</p>
              <p><b>Qtd. em estoque:</b> ??</p>
              <p><b>R$</b> ???</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="box-product">
            <Link to='/edit'>
              <div className="img">
                <img src={ProductIcon} alt="" className="product-img"/>
              </div>
              <p style={{marginTop: 10, fontWeight: "bold"}}>Nome do produto</p>
              <p><b>Qtd. em estoque:</b> ??</p>
              <p><b>R$</b> ???</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="box-product">
            <Link to='/edit'>
              <div className="img">
                <img src={ProductIcon} alt="" className="product-img"/>
              </div>
              <p style={{marginTop: 10, fontWeight: "bold"}}>Nome do produto</p>
              <p><b>Qtd. em estoque:</b> ??</p>
              <p><b>R$</b> ???</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="box-product">
            <Link to='/edit'>
              <div className="img">
                <img src={ProductIcon} alt="" className="product-img"/>
              </div>
              <p style={{marginTop: 10, fontWeight: "bold"}}>Nome do produto</p>
              <p><b>Qtd. em estoque:</b> ??</p>
              <p><b>R$</b> ???</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="box-product">
            <Link to='/edit'>
              <div className="img">
                <img src={ProductIcon} alt="" className="product-img"/>
              </div>
              <p style={{marginTop: 10, fontWeight: "bold"}}>Nome do produto</p>
              <p><b>Qtd. em estoque:</b> ??</p>
              <p><b>R$</b> ???</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="box-product">
            <Link to='/edit'>
              <div className="img">
                <img src={ProductIcon} alt="" className="product-img"/>
              </div>
              <p style={{marginTop: 10, fontWeight: "bold"}}>Nome do produto</p>
              <p><b>Qtd. em estoque:</b> ??</p>
              <p><b>R$</b> ???</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="box-product">
            <Link to='/edit'>
              <div className="img">
                <img src={ProductIcon} alt="" className="product-img"/>
              </div>
              <p style={{marginTop: 10, fontWeight: "bold"}}>Nome do produto</p>
              <p><b>Qtd. em estoque:</b> ??</p>
              <p><b>R$</b> ???</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="box-product">
            <Link to='/edit'>
              <div className="img">
                <img src={ProductIcon} alt="" className="product-img"/>
              </div>
              <p style={{marginTop: 10, fontWeight: "bold"}}>Nome do produto</p>
              <p><b>Qtd. em estoque:</b> ??</p>
              <p><b>R$</b> ???</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="box-product">
            <Link to='/edit'>
              <div className="img">
                <img src={ProductIcon} alt="" className="product-img"/>
              </div>
              <p style={{marginTop: 10, fontWeight: "bold"}}>Nome do produto</p>
              <p><b>Qtd. em estoque:</b> ??</p>
              <p><b>R$</b> ???</p>
            </Link>
          </div>
        </li>
      </ul>
    </div>
    </>
  )
}