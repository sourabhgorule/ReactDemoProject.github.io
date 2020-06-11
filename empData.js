import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Modal from '@material-ui/core/Modal';

export default function Empdata({addEmpClick,employees,deleteData,updateData,addButtonFlag})
{
    
   const[modalFlag,changeModalFlag]=useState(false);
   const [open, setOpen] = React.useState(false);
    
    
    function addClick(e)
    {
        console.log("im in a empdata file an addclick method")
        addEmpClick();
        //changeButtonFlag(false);
    }
    
    
    function updateClick(id)
    {
          //eslint-disable-next-line no-restricted-globals


          updateData(id);
          
            
          
    }

    function deleteClick(id)
    {
        //eslint-disable-next-line no-restricted-globals
        var confirmation=confirm("do you delete this row/Data");
        
        if(confirmation)
        {
            
        deleteData(id);
       // changeButtonFlag(true);
        
        }
        else{
            alert("Thank you");
        }

    }
    
    
   
    return(
        <div >
            <form name="empdata" >
                <h2>Employee Data</h2>
                <TableContainer component={Paper}>
        <Table id="myTable"  border="1">
            <TableHead>
                <TableRow >
                    <th>ID</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>age</th>
                    <th>Edit</th>
                    
                </TableRow>
            </TableHead>
            <TableBody id="myBody">
               
                {employees.map(function(emp,i) {

                   var id=i+100;
                    return(
                        
                            <TableRow key={id}>
                                <td style={{ color: 'blue' }}>{id}</td>
                                <td style={{ color: 'blue' }}>{emp.fname}</td>
                                <td style={{ color: 'blue' }}>{emp.lastname}</td>
                                <td style={{ color: 'blue' }}>{emp.age}</td>
                                 
                                {/* <input type="button" value="Edit" onClick={editclick} ></input>
                                <input type="button" value="delete"  onClick={deleteclick}></input> */}
                                <td>
                                  <Button  name="update" variant="outlined" color="secondary"  onClick={function(){updateClick(i)}}> <UpdateIcon></UpdateIcon> Update</Button>&nbsp;
                                    
                                    <Button  name="delete" variant="outlined" color="secondary"  onClick={function(){deleteClick(i)}}><DeleteIcon></DeleteIcon>Delete</Button>
                                </td>
                            </TableRow>
                        
                    );
                     
                })}
           </TableBody>
        </Table>
        </TableContainer><br></br>
         
         {addButtonFlag&&<Button variant="contained" color="primary" onClick={addClick} ><AddCircleOutlineOutlinedIcon/>Add Employee</Button>}
         </form>
         
    </div>
    );
}