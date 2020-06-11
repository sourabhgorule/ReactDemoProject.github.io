import React,{useState} from 'react';

import './App.css';

  import Login from './login';
  import Empdata from './empData';
  import AddEmployee from './addEmployee';
  import UpdateData from './updateData';
  import Demo from './demo1';




 function App() {
  
  const[loginFlag,changeLoginLlag]=useState(true);

  const[empDataFlag,changeEmpDataflag]=useState(false);

  const[addEmpFlag,changeAddFlag]=useState(false);

  const[appUpdateFlag,changeUpdateFlag]=useState(false);

  const[idNumber,changeId]=useState(0);

  const[specificEmp,changeSpecificEmp]=useState({fname:"",lastname:"",age:""});

  const[employees,changeEmplo]=useState([{fname:"rohit",lastname:"dhawade",age:"23"}]);

  const[addButtonFlag,changeButtonFlag]=useState(true);

  const[updateFormFlag,changeUpdateFormFalg]=useState(false);
  function showEmpList()
  {

    changeEmpDataflag(true);
    changeLoginLlag(false);
   
  }

  function addEmpClick()
  {

    console.log("im in a app.js file an addempclick method")
    changeAddFlag(true);
    changeUpdateFlag(false);
    const emp={fname:"",lastname:"",age:""};
    changeSpecificEmp(emp);
    changeUpdateFormFalg(false);
    changeButtonFlag(false);
  
    
  }
  function updateData(id)
   {

    changeAddFlag(true);
      changeId(id);
      changeSpecificEmp(employees[id]);
      changeUpdateFlag(true);
      changeUpdateFormFalg(true);
      changeButtonFlag(false);
   }

  function cancleClick()
  {
    changeAddFlag(false);
    changeUpdateFlag(false);
    changeButtonFlag(true);
  }

  function changeList(employee)
  {
   
    console.log("im in chngelist function");
    changeButtonFlag(true);
    
     const newEmployees = [...employees, employee];

     changeEmplo(newEmployees);
     alert("employee information is successfully added");    
  }
  
   function deleteData(id)
   {
     const newEmployees=[...employees];
    newEmployees.splice(id,1);
    changeEmplo(newEmployees);
    changeAddFlag(false);
    changeButtonFlag(true);
   }

   
   function listUpdate(emp,idNumber)
   {
     console.log('hi');
     employees.splice(idNumber,1,emp)
    
     changeEmplo(employees);
     changeUpdateFlag(false);
     changeAddFlag(false);
     changeButtonFlag(true);
     


   }

   

  return (
    <div className="App">
      
    {loginFlag && <Login showEmpList={showEmpList}></Login>}

    {addEmpFlag &&<AddEmployee cancleClick={cancleClick} changeList={changeList} specificEmp={specificEmp} updateFormFlag={updateFormFlag} idNumber={idNumber}  listUpdate={listUpdate}></AddEmployee>}

   
    
    {empDataFlag&&<Empdata addEmpClick={addEmpClick} employees={employees} deleteData={deleteData} updateData={updateData} addButtonFlag={addButtonFlag}  ></Empdata>}
      
   {/* <Demo></Demo> */}
    
    </div>
    
  );
}

export default App;
