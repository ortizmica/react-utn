import "../../components/Nav/Nav"
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import {useState, useEffect} from 'react';
import "./Characters.css"

function Character() {
    let [listaCompleta,setListaCompleta]=useState([]);//lista completa de todos los personajes que trae la API
    let [personajes,setPersonajes]=useState([]);//lista de personajes a reproducir en las tarjetas
    let [filtros]=useState([
        {
            nombre:"Alive",
            filtro:'Character Alive'
        },{  
            nombre:"Dead",
            filtro:'Character Dead'
        },{
            nombre:'Female',
            filtro:'Female'
        },{
            nombre:"Male",
            filtro:'Male'
        },{
            nombre:"unknown",
            filtro:'Origin Unknown'
        }]);
    let[filtrosAplicados,setFiltrosAplicados]=useState([]);

    let traerPersonajes=async()=>{
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err =>console.log("Hubo un error: "+ err));

        return dato
    }

    let aplicarFiltros=(event)=>{
        let nombreCheckbox=event.target.id;

        if(event.target.checked === true){
            console.log("Aplicar filtro")
            setFiltrosAplicados([...filtrosAplicados,nombreCheckbox]);
            //console.log(personajes)
        }else{
            console.log("sacar filtro")
            let filtrosRestantes=filtrosAplicados.filter((el)=>el !== nombreCheckbox);
            setPersonajes(listaCompleta);//para que agregue los personajes que no tenia por el filtro
            setFiltrosAplicados(filtrosRestantes)
    
        }    
           // console.log(nombreCheckbox)info de que checkbox esta pulsando
           // console.log(event.target.checked) si el checkbox esta checked o no
    }

    useEffect(()=>{
        let guardarPersonajes=async()=>{
            let info =await traerPersonajes();
        // console.log(info.results)// //investigamos que nos trae el llamado a la API
            let listaPersonajes=info.results;//guardamos el array de los personajes

            setPersonajes(listaPersonajes)//cambiamos el estado personajes utilizando su setter
            setListaCompleta(listaPersonajes)
        }
        
        guardarPersonajes();
        
    },[])

    useEffect( ()=>{
        //console.log(filtrosAplicados)
      filtrosAplicados.forEach((filtroNombre)=>{
            let resultado;
            if(filtroNombre === "Alive" || filtroNombre === "Dead"){
                    resultado=personajes.filter((personaje)=> personaje.status === filtroNombre)
                }
                if(filtroNombre === "Female" || filtroNombre === "Male"){
                    resultado=personajes.filter((personaje)=> personaje.gender === filtroNombre)
                }
                if(filtroNombre === "unknown"){
                    resultado=personajes.filter((personaje)=> personaje.origin.name === filtroNombre)
                    
                }
                setPersonajes(resultado)//nueva lista de personajes a reproducir
        })
       
    },[filtrosAplicados])// la dependencia de "filtrosAplicados"


    return(
        <div>
            <Nav/>
            <div>
                <h2 className="h2">Filters</h2>
                <form className='filtros d-flex gap-5 p-5 '>
                    {filtros.map((item)=>{ return <Filter key={item.nombre} valorFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>})}
               </form>
            </div>
            <div className="cards">
                {personajes.map((personaje)=>{
                                    return <Card data={personaje} key={personaje.id}/>
                        })}
            </div>
        </div>
    )
}

export default Character;