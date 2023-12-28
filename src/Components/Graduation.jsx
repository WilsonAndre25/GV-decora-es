import {Form } from "react-bootstrap"



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faPhoneVolume, faSquarePhone, faTruckFast, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Graduation= () => {
    return(

        <div>

<div className='fisrtSlider'>

<div className=' marcação'>
    <h3>Aniversarios</h3>
</div>

< div className='cards'>

    <div className='imgedite'>
        <img className='rounded' src="img/cenario bolos.jpeg" width={300} height={400} alt='' />
        <div className='foote'>

        </div>
    </div>

    <div className='imgedite'>

        <img className='rounded' src="img/aniversario 5.jpeg" width={300} height={400} alt='' />
        <div className='foote'>

        </div>

    </div>

    <div className='imgedite'>
        <img className=' rounded' src="img/2023-11-08 at 11.59.43 (1).jpeg" width={300} height={400} alt='' />

        <div className='foote'>

        </div>
    </div>


    <div className='imgedite'>
        <img className=' rounded' src="img/balões.jpeg" width={300} height={400} alt='' />

        <div className='foote'>


        </div>

    </div>
</div>


<div className='cards2'>

    <div className='imgedite'>
        <img className=' rounded' src="img/graduação azul.jpeg" width={300} height={400} alt='' />


    </div>

    <div className='imgedite'>
        <img className=' rounded' src="img/graduação.jpeg" width={300} height={400} alt='' />


    </div>

    <div className='imgedite'>
        <img className='rounded' src="img/graduação9.jpeg" width={300} height={400} alt='' />

    </div>


    <div className='imgedite'>
        <img className=' rounded' src="img/gradução.jpeg" width={300} height={400} alt='' />


    </div>

</div>

</div>





















<div>


<div className="Footer1">
    <div className="contactos1">

        <div>Apoio ao Cliente: +258845528125 </div>
        <div> Email: ggcvalentim@gmail.com</div>

    </div>
</div>




<div className="Footer2">

    <div className="contactos2">

        <div className=''>

            <div className="contact3">CONTACTOS<FontAwesomeIcon icon={faPhoneVolume} /></div>
            <div className="contact2"> <FontAwesomeIcon icon={faHouse} />Beira / Rua General Vieira da Rocha / Pioneiros</div>
            <div> <FontAwesomeIcon icon={faSquarePhone} /> Whatsaap: +258825784320 </div>
            <div> <FontAwesomeIcon icon={faEnvelope} />Email: ggcvalentim@gmail.com</div>

            <div>
                <div className=''>

                </div>


            </div>

        </div>


        <div>

            <div className="contact0" >ENTREGAS <FontAwesomeIcon icon={faTruckFast} /></div>
            <div className="contact4"> Custos de Envio </div>
            <div> Prazo de Entregas</div>

        </div>


        <div>

            <div className="contact">REDES SOCIAS </div>

            <div className="redes">

                <a href="k"><FontAwesomeIcon icon={faFacebook} /> </a>
                <a href="k"><FontAwesomeIcon icon={faInstagram} /> </a>
                <a href="+258825784320"><FontAwesomeIcon icon={faSquareWhatsapp} /> </a>

            </div>

        </div>


        <div className='textos'>


            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>FALE CONOSCO</Form.Label>
                    <Form.Control type="text" placeholder="Assunto*" />
                </Form.Group>

                <Form.Control type="text" placeholder="Telemovel*" />
                <Form.Group controlId="formGroupPassword">

                    <Form.Control type="email" placeholder="Email*" />
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form.Group>
            </Form>


        </div>

    </div>


    <div className="reserved">
        <p> &copy; 2023 Valentim Decorações. All Rights Reserved </p>
    </div>

</div>


</div>
















        </div>
        
    )
}

export default Graduation