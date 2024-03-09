import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SideNavbar from './Components/SideNavbar';
import PatientInformation from './Components/PatientInformation';
function App() {
  return (
    <div className="App">
      <Router>
        <Row>
        <Col lg={3} className="">
          <SideNavbar />
        </Col>
        <Col sm={12} md={12} lg={6} className="col-12 col-md-12 col-lg-6">
          {/* Content for the main section */}
        </Col>
        <Col sm={12} md={12} lg={3} className="d-none d-lg-block">
          <PatientInformation />
        </Col>
      </Row>
      </Router>
      
    </div>
  );
}

export default App;
