
import './App.css'
import Card from './food.jsx'
import { useState } from 'react';

const items = [{
  id: "0",
  food: "pizza",
  calorie: "400"
},
{
  id: "1",
  food: "burger",
  calorie: "60"
},
{
  id: "2",
  food: "coke",
  calorie: "120"
},
{
  id: "3",
  food: "french-fries",
  calorie: "167"
},
{
  id: "4",
  food: "ice-cream",
  calorie: "40"
},
{
  id: "5",
  food: "cheeze",
  calorie: "240"
}]

function App() {
  const [state, setstate] = useState(items)
  return (
    <div className="App">
      {state.length ? (state.map((item,id) => {
        return <Card 
        data = {item}
        id ={id}
        setstate = {setstate}
        state = {state}
        />
      })) :(
        <h1>Empty Data</h1>
      )}
    </div>
  );
}

export default App;
