import { useState } from 'react';
import './App.css';
import CarePlanAction from './Components/CarePlanAction';
import SideNavbar from './Components/SideNavbar';
import CarePlan from './Components/carePlan/CarePlan';
import PatientInformation from './Components/patientInformation/PatientInformation';
function App() {
  const [showCarePlan, setShowCarePlan] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowCarePlan(false);
  };

  return (
    <div className="section">
      <SideNavbar menuOpen={menuOpen} closeMenu={closeMenu} />
      {/*(Main Content) */}
      {showCarePlan ? <CarePlan handleButtonClick={handleButtonClick} toggleMenu={toggleMenu} /> : <CarePlanAction />}
      <PatientInformation />
      {/* {showCarePlan ? null : <CarePlanDetails />} */}
    </div>
  );
}

export default App;
