import './style.css';

function Card(props){
    const {title,dis}=props;
    return(
        <div className="card">
        <h1>{title}</h1>
        <h4>{dis}</h4>
        </div>
    );
}

export default Card;