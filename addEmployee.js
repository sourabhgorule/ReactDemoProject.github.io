import React,{useState,UseEffect, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';





export default function AddEmployee({cancleClick,changeList,specificEmp,updateFormFlag,idNumber,listUpdate})
{
  const[fNameState,changeFirstName]=useState(specificEmp.fname);
  const[lNameState,changeLastName]=useState(specificEmp.lastname);
  const[ageState,changeAge]=useState(specificEmp.age);
  const[progressBar,changeProgressBar]=useState(false);
  const [progress, setProgress] = React.useState(0);
  console.log(progressBar);

  

 


  // useEffect(()=>{
  //   changeFirstName(specificEmp.fname);
  //   changeLastName(specificEmp.lNameState);
  //   changeAge(specificEmp.age);
  //   document.getElementById("name").value=specificEmp.fname;
  //   document.getElementById("lname").value=specificEmp.lastname;
  //   document.getElementById("age").value=specificEmp.age;
  // },[specificEmp])



  useEffect(()=>{
      changeFirstName(specificEmp.fname);
       changeLastName(specificEmp.lastname);
       changeAge(specificEmp.age);},[specificEmp])
  
  
  

  //console.log(fNameState);
  

  const[msgFlag,changeMsgFlag]=useState(false);
  
  const[numFlag,changeNumFlag]=useState(false);

  
  function addempclick(event)
  {
   
    var fname=document.forms["regform"]["name"].value;
    var lname=document.forms["regform"]["lname"].value;
    var age=document.forms["regform"]["age"].value;
    
    //validation
    if(fname==="" || lname==="" ||age==="")
    {
      changeMsgFlag(true);
    }
    else
    {
      if(isNaN(age))
      {
          changeNumFlag(true);
      }
     
      else{
        let emp={fname:fname,lastname:lname,age:age,};
        cancleClick();
        changeList(emp);
        changeProgressBar(true);
        }
    }

  }
 
  function updateClick(idNumber)
  {
      var f_name=document.forms["regform"]["name"].value;
      var lname=document.forms["regform"]["lname"].value;
      var age=document.forms["regform"]["age"].value;

      let updateData={fname:f_name,lastname:lname,age:age}
      console.log(updateData);
      console.log(idNumber);
      listUpdate(updateData,idNumber);
      
     
      
  }
  function progressbar()
  {
    console.log("im in a progress bar function");
    changeProgressBar(true);
  }
  function canclick()
    {
      cancleClick();
    }

    function changeFName()
    {
      changeFirstName(document.forms["regform"]["name"].value);
    }

    function changelName()
    {
        changeLastName(document.forms["regform"]["lname"].value);
    }
    function ageChnage()
    {
        changeAge(document.forms["regform"]["age"].value);
    }

    
    
    return (
      
        
        <div >
          
          <form name="regform" >
            {<h2></h2>}
          {updateFormFlag===false &&<h1 style={{color:'MidnightBlue'}}>Register  Here</h1>}
          {updateFormFlag &&<h1 style={{color:'MidnightBlue'}}>Update Here</h1>}

          {/* validation msg */}
          {msgFlag &&<h2 style={{color:'red'}}>fill all information</h2>}

          
              
              <TextField  id="name" name="name" label=" first name" type="text" value={fNameState} onChange={changeFName} />
              <br></br><br></br>
             
              <TextField  id="lname" name="lname" label=" last name" type="text" value={lNameState} onChange={changelName} />
              <br></br><br></br>

              {/* validation msg */}
              {numFlag&&<h2  style={{color:'red'}}>enter valid age</h2>}
              
              <TextField  id="age" name="age" label=" age "  value={ageState} onChange={ageChnage}/>
              <br></br><br></br>

              
              {updateFormFlag===false&&<Button  name="submit" variant="outlined" color="primary" onClick={addempclick,progressbar}>SUBMIT</Button>}&nbsp;

              
              {updateFormFlag &&<Button  name="update" variant="outlined" color="primary" onClick={function(){updateClick(idNumber)}}>UPDATE</Button>}&nbsp;


              
              <Button name="cancle" variant="outlined" color="secondary" onClick={canclick}> CANCLE</Button>
              
              </form>
              
              <br></br>
        </div>
        
        
      );
    
}

