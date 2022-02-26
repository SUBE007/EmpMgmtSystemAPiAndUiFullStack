import React, { useState } from 'react'
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {


   const [employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
   });

   const handleChange= (e) => {
     const value=e.target.value;
     
      setEmployee({...employee,[e.target.name]:value})
   };

   const saveEmployee=(e)=>{
     e.preventDefault();//disable the refresh  of the page
     EmployeeService.saveEmployee(employee).then((response)=>{
          console.log(response);
     }).catch((error)=>{
          console.log(error);
     })

   };

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
    <div className='px-8 py-8'>
         <div className='font-thin text-xl tracking-wider'>
           <h1>Add New Employee</h1>
         </div>

         <div className='item-center justify-center h-14 w-full my-4'> 
              <label className='block text-gray-600 text-sm font-normal'>First Name </label>
              <input type="text" 
                 name='firstName' 
                 value={employee.firstName}
                 onChange={(e)=>handleChange(e)}
                 className='h-7 w-96 border mt-2 px-1 py-2'>
               </input>
         </div>

         <div className='item-center justify-center h-14 w-full my-4'> 
              <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
              <input type="text"
               name='lastName'
               value={employee.lastName}
               onChange={(e)=>handleChange(e)}
               className='h-7 w-96 border mt-2 px-1 py-2'>
              </input>
         </div>

         <div className='item-center justify-center h-14 w-full my-4'> 
              <label className='block text-gray-600 text-sm font-normal'>Email Id</label>
              <input type="email"
               name='emailId'
               value={employee.emailId}
               onChange={(e)=>handleChange(e)}
               className='h-7 w-96 border mt-2 px-1 py-2'>
              </input>
         </div>

         <div className='item-center justify-center h-14 w-full my-4 space-x-4 pt-4'> 
               <button 
                onClick={saveEmployee}
                className='rounded text-white font-semibold  bg-green-600 py-2 px-6 hover:bg-green-800'> 
                Save
               </button>
               
               <button className='rounded text-white font-semibold
                bg-red-600 py-2 px-6 hover:bg-red-800'> Clear</button>
         </div>

         <div className='item-center justify-center h-14 w-full my-4'> 
              
         </div>
 

    </div>
    
    </div>
  )
}

export default AddEmployee