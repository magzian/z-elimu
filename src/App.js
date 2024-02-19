import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar1 from './components/Navbar';
import Home from './components/Home';
/* import './courses.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaInstagram, FaFacebook, FaLinkedin} from "react-icons/fa"; */

function App() {
   return (
     <div>
        <Navbar1 />
        <Home /> 
    </div> 
  ); 
 /*  return (
     <>
     <Navbar bg="primary">
        <Container  className="d-flex justify-content-end">
            <Nav>
                <Nav.Link href='#instagram'><FaInstagram /></Nav.Link>
                <Nav.Link href='#facebook'><FaFacebook /></Nav.Link>
                <Nav.Link href='#linkedIn'><FaLinkedin /></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    <div className=" container d-flex flex-column mb-3 w-100 vh-100 align-items-center justify-content-center">
      <div className='border border-5 p-5'>
      <div className='text-center'>
        <h1 className='text-primary'>courses</h1>
      </div>
    <div className="p-2">
        
<button>
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">Math</span>
</button>

    </div>
    <div className="p-2">
    <button>
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">English</span>
</button>
    </div>
    <div className="p-2">
    <button>
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">Swahili</span>
</button>
    </div>
    </div>
  </div>
  </>
  ) */
}

export default App;
