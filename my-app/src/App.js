import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SideNavbar from './Components/SideNavbar';
import CarePlan from './Components/carePlan/CarePlan';
import PatientInformation from './Components/patientInformation/PatientInformation';
function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Row>
            {/* SideNavbar */}
            <Col sm={12} md={3} lg={2}>
              <SideNavbar />
            </Col>
            {/* CarePlan (Main Content) */}
            <Col sm={8} md={6} lg={8}>
              <CarePlan />
            </Col>
            {/* PatientInformation */}
            <Col lg={2} className="d-none d-lg-block">
              <PatientInformation />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
