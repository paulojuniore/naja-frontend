import React from 'react';

import Header from '../Header';

import './styles.css';

export default function Session() {
  return (
    <>
    <Header />
    <div className="container">
      <ul className="container-products">
        <li>
          <div className="box-product">
            <strong>Nome do produto</strong>
          </div>
        </li>
        <li>
          <div className="box-product">
            <strong>Nome do produto</strong>
          </div>
        </li>
        <li>
          <div className="box-product">
            <strong>Nome do produto</strong>
          </div>
        </li>
        <li>
          <div className="box-product">
            <strong>Nome do produto</strong>
          </div>
        </li>
      </ul>
    </div>
    </>
  )
}