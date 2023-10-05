import "./Card.css";
import"../InfoCard/InfoCard";
import InfoCard from "../InfoCard/InfoCard";
import { Fragment, useState } from "react";

function Card({data}) {
    const [show,setShow] = useState(false);

    return(
        <Fragment>
            <section className="">
                <div className="card d-flex flex-column justify-content-between align-items-center">
                    <img src={data.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2 className="card-title text-center size-name">{data.name}</h2>
                        <button className={show?"d-none btn":"d-block btn"} onClick={()=> setShow(true)}>know more...</button>
                    </div>
                </div>
                <div>
                    {show === true? <InfoCard status={data.status} gender={data.gender} species={data.species} origin={data.origin.name} setShow={setShow}/> :""}
                </div>
            </section>
        </Fragment>
    )
}

export default Card;