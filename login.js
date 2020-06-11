import React,{useState}from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';





export default function Login({showEmpList})
{
    //Create state
    const[loginFlag,changeLogin]=useState(false);
    
    var un="sourabh";
    var p="sourabh";
   
    
  
    function btnclick(event)
    {
        

        let uname=document.forms["loginForm"]["username"].value;
        let pw=document.forms["loginForm"]["pwd"].value;
        if(un===uname && p===pw)
        {
            changeLogin(false);
           
            showEmpList();
            
            
        }
        else{

            changeLogin(true);
            
        }
            
    }
    
    return(
        <div id="login"   ><br></br>
        <form name="loginForm">
        
            <h2 style={{ color: 'blue' }}>LOGIN HERE</h2><br></br>
            {loginFlag&&<h2>enter right username and password</h2>}
            
                
                   
                    <TextField id="outlined-basic" name="username" label="USERNAME"  variant="outlined" ></TextField><br></br><br></br>
                   
                    <TextField id="outlined-basic" name="pwd" label="PASSWORD" type="password" variant="outlined" /><br></br><br></br>

                    <Button  name="login" variant="outlined" color="primary"  onClick={btnclick}>Login</Button>
                    
            
            </form>
           
        </div>
        
        
        
        

    );
}