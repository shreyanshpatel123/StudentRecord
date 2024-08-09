import { useParams } from "react-router-dom"
import axios from "axios"
import { useState,useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditData =()=>{
    
const {id}=useParams()

const [mydata,setMydata]=useState({})

const loadData=()=>{
     let url=`http://localhost:3000/student/${id}`
     console.log(id)
      axios.get(url).then((res)=>{
         setMydata(res.data)
     })
    
}

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}))
}

const handlesubmit=()=>{
     let url=`http://localhost:3000/student/${id}`
       axios.put(url,mydata).then((res)=>{
          alert("update")
       })
}

useEffect(()=>{loadData()},[])
    return(
        <>
    

         <Form style={{width:"600px",margin:"20px 200px 20px  380px",padding:"30px",border:"4px solid blue"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Roll no</Form.Label>
        <Form.Control type="text" value={mydata.rollno}   name='rollno' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={mydata.name} name='name' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" value={mydata.city} name='city' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Frees</Form.Label>
        <Form.Control type="text" value={mydata.fees} name='fees' onChange={handleInput} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>
        </>
    )

}

export default EditData