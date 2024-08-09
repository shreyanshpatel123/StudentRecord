import { useState } from "react"
import axios from "axios"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search=()=>{
    const[rollno,SetRollno]=useState("")
    const [mydata,setMydata]=useState([])

    const mySearch=()=>{
        let url=`http://localhost:3000/student/?rollno=${rollno}`
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
    
    const ans=mydata.map((key)=>{
        return(
          <>
          <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
          </tr>
          </>
        )
      })

    
        return(
        <>

       

        <Form style={{width:"20%", margin:"5% 0 7% 5%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Rollno </Form.Label>
        <Form.Control type="text"  value={rollno}  onChange={(e)=>{SetRollno(e.target.value)}}  />
      
      </Form.Group>
      <Button variant="primary"  onClick={mySearch} >
        Submit
      </Button>
    </Form>


       <Table striped bordered hover>
      <thead >
        <tr>
          <th>rollno</th>
          <th>name</th>
          <th>city</th>
          <th>fees</th>
        </tr>
      </thead> 
    
    <tbody>
        { ans }
    </tbody>

      </Table>
        </>
    )
}

export default Search