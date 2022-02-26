import './App.css';
import AddEmployee from './component/AddEmployee';
import EmployeeList from './component/EmployeeList';
import Navbar from './component/Navbar';
 import { BrowserRouter, Routes,Route} from "react-router-dom";

 

function App() {
  return ( 
    <>
    <BrowserRouter>
        <Navbar />
         
        <Routes>
          <Route index element={<EmployeeList />} /> 
          <Route path="/" elements={<EmployeeList /> } /> 
          <Route path="/employeeList" element={<EmployeeList />} /> 
          <Route path="/addEmployee" element={<AddEmployee /> } />
        </Routes>
         
     </BrowserRouter>
  
   </>
  );
}

export default App;
