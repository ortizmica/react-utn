import "./InfoCard.css"

function InfoCard({status,origin,species,gender,setShow}){
    return(
        <div className="infocard">
            <ul className="list-group">
                <button className="btn close mb-3" onClick={()=>setShow(false)}><i className="bi bi-x-lg"></i></button>
                <li className="list-group-item flex-column d-flex p-3 color-ul">
                    <h4>Character Status:</h4>
                    <p>{status}</p></li>
                <li className="list-group-item  color-ul">
                    <h4>Specie:</h4>
                    <p>{species}</p></li>
                <li className="list-group-item  color-ul">
                    <h4>Origin:</h4>
                    <p>{origin}</p></li>
                <li className="list-group-item  color-ul">
                    <h4>Gender:</h4>
                    <p className="align-self-start">{gender}</p></li>
            </ul>
        </div>
    )
}

export default InfoCard;