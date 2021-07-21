import "./App.css"
import Card from "./Card.jsx"
import Chess from"./Chess.jsx"


function App(){
    return (
    <div className = "App">
        <div className = "container">
            <div className="left">
                <Card name = "sea" image = "image1.jpg"/>
                <Card name = "carry" image = "carrymianti2.jpg"/>

            </div>
            <div className = "right">
                <Chess/>
            </div>
        </div>
    </div>)
}
export default App;