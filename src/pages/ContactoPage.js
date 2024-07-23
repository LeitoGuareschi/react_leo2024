import '../styles/Contacto.css';


const ContactoPage = (props) => {
    return (

        <main className="holder contacto">
            <div>
                <h2>Completa el formulario</h2>
                <form action="" class="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Teléfono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Comentarios</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien pueden contactarse a traves de estos medios</p>
                <ul>
                    <li><a href=""><i className="fa-solid fa-phone"></i> </a>: info 123123123</li>
                    <li><a href=""><i className="fa-brands fa-facebook"></i></a>: info asdasd</li>
                    <li><a href=""><i className="fa-brands fa-instagram"></i></a>: info asdasd</li>
                    <li><a href=""><i className="fa-brands fa-twitter"></i></a>: info asdasd</li>
                    <li><a href=""><i className="fa-brands fa-tiktok"></i></a>: info asdasd</li>
                    <li><a href=""><i className="fa-regular fa-envelope"></i></a>: @asdasdasdas</li>
                </ul>
                <div className="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.122929789896!2d-69.38584180890223!3d-33.602114755408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967c4f4b2b76b5ff%3A0xd6e2f4278206d4a8!2sManzano%20Historico%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1716212972118!5m2!1ses-419!2sar" style={{ border: 0, width: 500, height: 300 }}>
                    </iframe>

                </div>
            </div>
        </main>
    )

}

export default ContactoPage;