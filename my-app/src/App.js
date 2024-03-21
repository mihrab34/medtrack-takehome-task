import './App.css';
import SideNavbar from './Components/SideNavbar';
import PatientInformation from './Components/patientInformation/PatientInformation';
function App() {
  return (
    <div className="section">
            {/* SideNavbar */}
              <SideNavbar />
            {/* CarePlan (Main Content) */}
              {/* <CarePlan /> */}
            {/* PatientInformation */}
              <PatientInformation />
    </div>
  );
}

export default App;
