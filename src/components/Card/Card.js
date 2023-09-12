import "./Card.css"

function Card() {
    return(
        <div className="card d-flex flex-column justify-content-between align-items-center">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2 className="card-title text-center size-name">Nombre Personaje</h2>
                <a href="#" className="btn align-self-end">Know More..</a>
            </div>
        </div>
    )
}

export default Card;