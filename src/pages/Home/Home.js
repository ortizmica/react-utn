import "./Home.css";

function Home(){
    return(
        <div id="home">
            <main id="cuadro">
                <h1>Proyect Rick & Morty</h1>
                <h2>Helcome to Rick & Morty Proyect!</h2>
                <p>This proyect was made for practising React and to made a functional website</p>
                <p>In this website you can know information of the characters of this animated series.</p>
                <p>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <h3>Lets go!</h3>
                <div id="botones">
                    <button className="btn">Characters</button>
                    <button className="btn">Contact</button>
                </div>
            </main>
        </div>
    )
}
export default Home;