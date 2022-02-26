import Axios from 'axios';
 

const EMPLOYEE_API_BASE_URL="http://localhost:8082/api/v1/employees"

class EmployeeService{

    saveEmployee(employee){
        Axios.post( EMPLOYEE_API_BASE_URL,employee)
    }
}
export default new EmployeeService();