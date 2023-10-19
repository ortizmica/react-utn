import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
    return(
        <div id="home">
            <main id="cuadro">
                <h1 className="texto-color">Proyect Rick & Morty</h1>
                <h2 className="texto-color">Helcome to Rick & Morty Proyect!</h2>
                <p className="texto-color">This proyect was made for practising React and to made a functional website</p>
                <p className="texto-color">In this website you can know information of the characters of this animated series.</p>
                <p className="texto-color">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <h3 className="texto-color">Lets go!</h3>
                <div id="botones">
                    <Link to="/characters" className="btn">Characters</Link>
                    <Link to="/contact" className="btn">Contact</Link>
                </div>
            </main>
        </div>
    )
}
export default Home;