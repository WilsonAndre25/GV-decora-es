import { Form } from 'react-bootstrap'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faPhoneVolume, faSquarePhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'



const Despedidas = () => {

    return (

        <div>

            <div className='Aboutus'>

                <div className="Somos">
                    <img src="img/csame gv.jpeg" alt='' />
                    <div className='layer'>
                        <h3>Valentim Decorações</h3>
                        <p>Decoramos com Amor e Paixão</p>
                    </div>
                </div>

                <div className='Somos2' >

                    <h6> Quem Somos ?</h6>

                    <span> A Valentim Decorações é uma empresa, especializada em decorações  para todo o tipo de eventos e momentos. Contamos com mais de 12 anos de experiência no mercado e centenas  de clientes satisfeitos com as soluções que propomos  </span>


                    <h6> Nossa Missão</h6>
                    <p>É sermos o seu parceiro na organização da sua festa, procurando disponibilizar-lhe tudo o que precisa para que o evento seja o sucesso que deseja.</p>

                    <h6> Nossa Visão </h6>
                    <p>Através de pessoas , criar um ambiente que proporciona alegria e satisfação as nossos clientes e ser o agente de inovação e criatividade.</p>


                    <h6> Os nossos Valores </h6>

                    <p> Especializados em impulsionar e inovar com foco em proporcionar  experiências diferenciadas em qualquer ambiente festivo no que se refere a decorações. Oferecendo divesas variedade e temas bastantes sugestivos.</p>
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
                                <button type="button" class="btn btn-primary  mt-2"> Enviar</button>
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

            export default Despedidas