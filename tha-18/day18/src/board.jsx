import "./App.css";

const Box1 = () =>{
    return <div className = "boxw"></div>
};

const Box2 = () =>{
    return <div className= "boxb"></div>
};

const Rowb  = ()=> {
    let arr = [];
    for(let i=0;i<8; i++){
        if(i % 2===0) arr.push(<Box2></Box2>);
        else arr.push(<Box1></Box1>)
    }
    return <div className ="row">{arr}</div>
};
const Roww  = () => {
    let arr = []
    for(let i=0;i<8;i++){
        if(i % 2===0) arr.push(<Box1></Box1>);
        else arr.push(<Box2></Box2>)
    }
    return <div className="row">{arr}</div>
};

let rows = [];
for(let i=0; i< 8; i++){
    if(i % 2===0){
    rows.push(<Rowb/>);
    }
    else rows.push(<Roww/>)
}

function Board(){
    return(
        <div className ="container" >
            <div className =" board">{rows}</div>
        </div>
    );
}
export default Board;

