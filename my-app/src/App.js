import { useState } from 'react';
import './App.css';
import CarePlanAction from './Components/CarePlanAction';
import CarePlanDetails from './Components/CarePlanDetails';
import SideNavbar from './Components/SideNavbar';
import CarePlan from './Components/carePlan/CarePlan';
import PatientInformation from './Components/patientInformation/PatientInformation';

function App() {
  const [showCarePlan, setShowCarePlan] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [record, setRecord] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const showRecords = () => {
    setRecord(false);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowCarePlan(false);
  };

  return (
    <div className="section">
      <SideNavbar menuOpen={menuOpen} closeMenu={closeMenu} />
      {/*(Main Content) */}
      {showCarePlan ? <CarePlan handleButtonClick={handleButtonClick} toggleMenu={toggleMenu} /> : <CarePlanAction showRecords={showRecords} />}
      <PatientInformation />
      {record ? null : <CarePlanDetails />}
    </div>
  );
}

export default App;
