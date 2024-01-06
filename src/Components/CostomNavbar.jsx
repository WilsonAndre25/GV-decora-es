
import{Navbar,NavDropdown,Nav } from 'react-bootstrap'
import tema from './img/tema 11.jpg'

const CostomNavbar = () => {
    
  return (
     <div> 
   
    <Navbar collapseOnSelect expand="lg" className="Nav1"   >
      <div className='tema'>
        <img src={tema} alt="icon5" /> 
      </div>
      
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle id="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <div className='list'>
          <Nav className="me-auto">
           
            <Nav.Link  href="Home" id='home'>Home</Nav.Link>
            <Nav.Link  href="Home" id='home'>Quem Somos</Nav.Link>
            <NavDropdown   title="Nossos Serviços" id="collasible-nav-dropdown">
               
               <NavDropdown.Item href="CASAMENTOS1">Casamentos</NavDropdown.Item>
              <NavDropdown.Item href="Graduation">Aniversarios</NavDropdown.Item>
              <NavDropdown.Item href="Mesas">Mesas</NavDropdown.Item>
              <NavDropdown.Item href="Infantis">Festas Infantis</NavDropdown.Item>
              <NavDropdown.Item href="Batismo">Batismos</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
          </div>
        </Navbar.Collapse>
  
    </Navbar>
</div>

  )

}

export default CostomNavbar;




