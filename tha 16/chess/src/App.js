import "./App.css";


function App(){
    return <div className = "App">
        <div className = "container">
            <div className="left">
                <card name = "sea" image = "image1.jpg"/>
                <card name = "loho" image = "logo512.png"/>

            </div>
            <div className = "right">
                <chess/>
            </div>
        </div>
    </div>;
}
export default App;