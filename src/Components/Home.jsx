
import { } from 'react-bootstrap'
import { Card, Row, Carousel, Form } from 'react-bootstrap'
import logo from './img/vd1.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faPhoneVolume, faSquarePhone, faTruckFast, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Casamento = () => {
    return (

        <div>
            <div className='slider'>

                <Row className='justify-content-center '>

                    <Carousel >
                        <Carousel.Item interval={1000}>
                            <div className='firstOne'>
                                <img

                                    src="img/ceanrio noivo 14.jpeg"
                                    alt="First-slide" />

                                <div className='secondone'>

                                    <div className='secondone'>


                                        <img

                                            src="img/casamento salão2.jpeg"
                                            alt="Second slide"
                                        />
                                    </div>

                                </div>

                            </div>

                            <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>

                            <div className='firstOne'>
                                <img

                                    src="img/mesa doura.jpeg"
                                    alt="Second "
                                />

                                <div className='secondone'>

                                    <img

                                        src="img/mesa4.jpeg"
                                        alt="Second "
                                    />

                                </div>

                            </div>

                            <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>

                            <div className='firstOne'>
                                <img

                                    src="img/cenario noivos 9.jpeg"
                                    alt="Third slide"
                                />

                                <div className='secondone'>
                                    <img

                                        src="img/cenario noivos 11.jpeg"
                                        alt="Third slide"
                                    />
                                </div>

                                <div className='divisão'>

                                </div>


                            </div>
                            <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Row>
            </div>

            <div className='substs'>

                <div className='logovd'>

                    <img src={logo} width={50} height={50} alt="icon"></img>
                    <h4 className='vd'> <span>Valentim</span><span></span> <span></span>Decorações<span></span></h4>
                    <img src={logo} width={50} height={50} alt="icon"></img>

                </div>

                <div className="Temas">

                    <div className="CASAMENTO"> <a href='CASAMENTOS1'>CASAMENTOS </a></div>
                    <div className="BATISMO"> <a href='Batismo'>BATISMO & COMUNHÃO</a></div>
                    <div className="DESPEDIDAS"> <a href=''>DESPEDIDA DE SOLTEIRO</a></div>
                    <div className="BABY"> <a href='Graduation'>GRADUAÇÕES</a></div>
                    <div className="INFANTIS"> < a href='Infantis'>FESTAS INFANTIS</a></div>
                    <div className="Mesas">  <a href='Mesas'>MESA DE FESTAS</a></div>

                </div>

            </div>

            <div className='fisrtSlider'>

                <div className=' marcação'>
                    <h3 >Tendências</h3>
                </div>

                < div className='cards'>

                    <div className='imgedite'>
                        <img className='rounded' src="img/cenario bal fechado.jpeg" width={300} height={400} alt='' />
                        <div className='foote'>
                            <h5>
                                Aniversarios
                            </h5>
                            <a href='Infantis'> Ver Mais </a>
                        </div>
                    </div>

                    <div className='imgedite'>

                        <img className='rounded' src="img/mesa rocha.jpeg" width={300} height={400} alt='' />
                        <div className='foote'>
                            <h5 >
                                Mesas
                            </h5>
                            <a href='Mesas'> Ver Mais </a>
                        </div>

                    </div>

                    <div className='imgedite'>
                        <img className=' rounded' src="img/casamento2.jpeg" width={300} height={400} alt='' />

                        <div className='foote'>
                            <h5>Casamentos</h5>
                            <a href='CASAMENTOS1'>  Ver Mais   </a>
                        </div>
                    </div>


                    <div className='imgedite'>
                        <img className=' rounded' src="img/graduação azul.jpeg" width={300} height={400} alt='' />

                        <div className='foote'>
                            <h5> Graduações</h5>
                            <a href='Graduation'>  Ver Mais   </a>

                        </div>

                    </div>
                </div>

                < div className='cards2'>

                    <div className='imgedite'>
                        <img className=' rounded' src="img/civil.jpeg" width={300} height={400} alt='' />

                        <div className='foote'>
                            <h5>Civil</h5>

                            <a href='k'>  Ver Mais   </a>

                        </div>
                    </div>

                    <div className='imgedite'>
                        <img className=' rounded' src="img/cenario azul rosa.jpeg" width={300} height={400} alt='' />

                        <div className='foote'>
                            <h5>Baby Shower</h5>
                            <a href='k'>  Ver Mais   </a>
                        </div>
                    </div>

                    <div className='imgedite'>
                        <img className='rounded' src="img/cenario noivos 14.jpeg" width={300} height={400} alt='' />
                        <div className='foote'>
                            <h5>
                                Batizados
                            </h5>
                            <a href='Batismo'>  Ver Mais   </a>
                        </div>
                        <span> </span>
                    </div>

                    <div className='imgedite'>
                        <img className=' rounded' src="img/igreja 4.jpeg" width={300} height={400} alt='' />

                        <div className='foote'>
                            <h5>Igreja</h5>

                            <a href='k'>  Ver Mais   </a>

                        </div>
                    </div>
                </div>

                <div className='Clientes'>
                    <h3>
                        O QUE DIZEM OS NOSSOS CLIENTES
                    </h3>
                </div>
                <div className='CardGroup'>

                    <div className='card1'>
                        <Card>
                            <Card.Img variant="top" src="img/gradução.jpeg" height={350} alt='' />
                            <Card.Body>

                                <Card.Text>
                                    <h5 className='d-flex  justify-content-center  text-primary'>Fomos a Graduação do Belgito</h5>
                                    <span>
                                        Procuramos que todas as celebrações sejam repletas de emoções
                                    </span>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </div>

                    <div>
                        <Card>
                            <Card.Img variant="top" src="img/cenario noivos 6.jpeg" height={350} alt='' />
                            <Card.Body>

                                <Card.Text>
                                    <h5 className='d-flex  justify-content-center  text-primary'>  Criamos Cenarios Onde Menos Esperas</h5>
                                    <span>
                                        Esperamos que os nossos produtos  ajudem a dar asas à vossa imaginação
                                    </span>

                                </Card.Text>
                            </Card.Body>

                        </Card>
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

                        <div className='allcontactos'>

                            <div className="contact3">CONTACTOS<FontAwesomeIcon icon={faPhoneVolume} /></div>
                            <div className="contact2"> <FontAwesomeIcon icon={faHouse} />Beira / Rua General Vieira da Rocha / Pioneiros</div>
                            <div className="contact2"> <FontAwesomeIcon icon={faSquarePhone} /> Whatsaap: +258825784320 </div>
                            <div className="contact2"> <FontAwesomeIcon icon={faEnvelope} />Email: ggcvalentim@gmail.com</div>
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
export default Casamento