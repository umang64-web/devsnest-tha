
function Card(props) {
    const { title, dis } = props;
    return (
        <div className="container">
                <div className="card">
                    <h1>{title}</h1>
                    <h4>You have assumed {dis} cal</h4>
                </div>
        </div>
    );
}

export default Card;