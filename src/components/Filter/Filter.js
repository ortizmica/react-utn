import "./Filter.css"

function Filter({valorFiltro,idFiltro,handlerChange}){
    return(
        <div className="form-check form-switch filter">
            <input className="form-check-input p-1" type="checkbox" role="switch" id={idFiltro} onChange={handlerChange}/>
            <label className="form-check-label fs-8 p-1" htmlFor={idFiltro}>{valorFiltro}</label>
        </div> 
    )
}

export default Filter;