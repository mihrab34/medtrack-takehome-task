import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/sidenavbar.css';

const SideNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-column">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='navbar-content-wrapper'>
            <Navbar.Brand className='brand-block d-flex flex-row align-items-center'>
              <Link to='#home' className='brand-icon d-flex align-items-center justify-content-center'>
                <img
                  alt="medtrack brand icon"
                  src='images/Logo_MedTrack.svg'
                  width="30"
                  height="30"
                />
              </Link>
              <p className='logo'>MedTrack</p>
            </Navbar.Brand>
            <div className="nav-user-profile">
              <Link to="#" className="user-avatar">
                <img
                  alt="Default avatar"
                  src='images/avatar_patient_default.png'
                  className='user-avatar' />
              </Link>
              <div className="username">Harriet Marfo</div>
              <div className="facility-name">Buduatta Health<br /> Centre</div>
            </div>
            <div className='navbar-menu-wrapper'>
              <Nav className="flex-column align-items-center">
                <Nav.Link as={Link} to="#patient" className='d-flex '>
                  <img
                    alt="Patients logo"
                    src='images/ic-patients.svg'
                  />Patients</Nav.Link>
                <Nav.Link as={Link} to="#waiting-room" className='d-flex '><img
                  alt="Patients logo"
                  src='images/ic-waiting-room.svg'
                />Waiting Room</Nav.Link>
                <Nav.Link as={Link} to="#in-patients" className='d-flex '><img
                  alt="Patients logo"
                  src='images/ic-inpatient.svg'
                />In-Patients</Nav.Link>
                <Nav.Link as={Link} to="#notifications" className='d-flex '><img
                  alt="Patients logo"
                  src='images/ic-notification-box.svg'
                />Notifications</Nav.Link>
                <Nav.Link as={Link} to="#settings" className='d-flex '><img
                  alt="Patients logo"
                  src='images/ic-settings.svg'
                />Settings</Nav.Link>
              </Nav>
              <div className="navbar-menu-base d-flex flex-column align-items-start">
                <div href="#" data-w-id="b73d2596-370f-6339-6ccc-649fdf28642e" className="logout-link ">
                  <div className="menu-icon logout"></div>
                  <div className="navbar-label">Log out</div>
                </div>
                <Link to="#" class="support-block">
                  <div class="support-icon-block"><img src="images/ic-feedback.svg" loading="lazy" alt="" class="support-icon" /></div>
                  <div class="support-h2">Feedback</div>
                </Link>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SideNavbar;
