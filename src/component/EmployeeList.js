import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeList = () => {
  const navigate = useNavigate();
  return (
    
    <>
  
    <div className='container mx-auto my-8'>    
      <div className='h-12'> 
      <button 
      onClick={()=>navigate("/addEmployee")}
      className="rounded bg-slate-600 text-white px-6 py-2">
        Add Employee
      </button>
    
    </div>
    <div className='flex shadow border-b'> 
    <table className='min-w-full'>
      <thead className='bg-gray-100'>
        <tr>
          <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'> First Name</th>
          <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'> Last Name</th>
          <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'> Email Id</th>
          <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'> Actions</th>
        </tr>
      </thead>

      <tbody className='bg-white'>
        <tr>
          <td className='text-left font-medium px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>Kuldeep</div>
           </td>
          <td className='text-left font-medium px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>  Rana</div>
          </td>
          <td className='text-left font-medium px-6 py-4 whitespace-nowrap'>
           <div className='text-sm text-gray-500'>kd@gmail.com</div>
          </td>
          <td className='text-right font-medium px-6 py-4 text-sm whitespace-nowrap'>
           <div className='text-sm text-gray-500'>
            <a href='#' className='text-indigo-600 hover:text-indigi-800 px-4' >Edit</a>
            <a href='#' className='text-indigo-600 hover:text-indigi-800 px-4'>Delete</a>
             </div>
          </td>
        </tr>
      </tbody>

    </table>

    </div>
    </div>

    </>
    
  )
}

export default EmployeeList