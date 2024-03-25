import { useState } from 'react';
import './App.css';
import CarePlanAction from './Components/CarePlanAction';
import SideNavbar from './Components/SideNavbar';
import CarePlan from './Components/carePlan/CarePlan';
import PatientInformation from './Components/patientInformation/PatientInformation';
function App() {
  const [showCarePlan, setShowCarePlan] = useState(true);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowCarePlan(false);
  };

  return (
    <div className="section">
      <SideNavbar />
      {/*(Main Content) */}
      {showCarePlan ? <CarePlan handleButtonClick={handleButtonClick} /> : <CarePlanAction />}
      <PatientInformation />
      {/* {showCarePlan ? null : <CarePlanDetails />} */}
    </div>
  );
}

export default App;
