import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/BlueTechtonicaWord.png'


function MyNavBar({ currentUser }) {



  return (
    <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
        <img
              src={Logo}
              height="30"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Nav.Link >Your Link</Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        {currentUser ? <Navbar.Text>Signed in as: <a href="#login">{currentUser[0].firstname} {currentUser[0].lastname}</a> </Navbar.Text> : null} 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNavBar;