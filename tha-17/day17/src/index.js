import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './style.css';
ReactDOM.render(
  <div>
  <h1 id="head">Calorie Read Only</h1>
  <div className="container">
  <Card title="Pizza" dis="you have consumed 56 cals today"/>
  <Card title="Burger" dis="you have consumed 69 cals today"/>
  <Card title="Coke" dis="you have consumed 500 cals today"/>
  <Card title="Browne" dis="you have consumed 180 cals today"/>
  <Card title="Fried Rice" dis="you have consumed 90 cals today"/>
  <Card title="Lassania" dis="you have consumed 200 cals today"/>
  <Card title="Pani Puri" dis="you have consumed 400 cals today"/>
  </div>
  </div>,
  document.getElementById("root")
);
