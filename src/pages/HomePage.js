import '../styles/Home.css';


const HomePage = (props) => {
    return (

        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avión"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ab expedita corrupti sint error,
                        accusamus pariatur minima rem itaque dicta quas debitis quos fugit ipsa? Libero ex autem
                        consequuntur sequi!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste quam laboriosam voluptates
                        cupiditate asperiores id. Laborum dolorum iure nihil odio aliquam explicabo earum ut repudiandae
                        nam! Maiores, a temporibus?</p>
                </div>

                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Gomez - zapatos.com</span>
                    </div>

                </div>

            </div>
        </main>

    )

}

export default HomePage;