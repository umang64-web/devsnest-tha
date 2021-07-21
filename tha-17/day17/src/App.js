import React from "react";
import Card from "./components/Card.jsx"
import "./style.css";



function App(props) {
  return (
    <div className = "main">
      <div>
      <h1 id ="head">
        calorie meter
      </h1>
      </div>
    <div className="App">
      <Card title ="burger" dis = "500 "/>
      <Card title ="pizza" dis = "800 "/>
      <Card title ="ice-cream" dis = "250 "/>
      <Card title ="pasta" dis = "200 "/>
      <Card title ="butter" dis = "600 "/>
      <Card title ="french-fries" dis = "357 "/>
    </div>
    </div>
  );
}

export default App;
