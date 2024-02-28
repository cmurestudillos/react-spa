import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../../assets/img/A-64.svg';

const Header = () => {
  return ( 
      <Navbar toggleable="lg" type="light" className="navbar navbar-expand-lg navbar-dark">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" title="Logo" width="30" height="30" />
        </Navbar.Brand>
        <Nav.Link href="/Heroes" className="active" >Heroes</Nav.Link>
      </Navbar>        
  );
}
 
export default Header;