

  import axios from "axios"
import { useState,useEffect } from "react"
import Table from 'react-bootstrap/Table';
import ima8 from  '../public/ima8.jpeg'
import img9 from '../public/img9.jpeg'
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const [mydata,setMydata]=useState([])
     const myNav=useNavigate()
    const loadData=()=>{
        let url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
          console.log(res.data)
          setMydata(res.data)
        })
      }

      useEffect(()=>{
        loadData()
      },[])

      const mydel=(myid)=>{
        let url=`http://localhost:3000/student/${myid}`
        axios.delete(url).then((res)=>{
            alert("record delet")
            loadData();
        })
      }

      const myEdit=(myid)=>{
       
        myNav(`/myedit/${myid}`)    // /myedit/101 
         
      }

      const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td> 
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td>
                     <a href="#" >
                        <img src={ima8}  width="30px" height="30px" onClick={()=>{mydel(key.id)}} />
                     </a>
                     <a href="#" >
                        <img src={img9}  width="30px" height="30px"  onClick={()=>{myEdit(key.id)}} />
                     </a>
                </td>
              
            </tr>
            </>
        )
      })
return(
    <>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>rollno</th>
          <th>name</th>
          <th>city</th>
          <th>fees</th>
          <th></th>
        </tr>
      </thead>
    
    <tbody>
        { ans }
    </tbody>

      </Table>
    </>
)
}

export default Update