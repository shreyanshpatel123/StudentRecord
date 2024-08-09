
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios"

const Insert=()=>{
    const [input,setInput]=useState({})
    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values,[name]:value}));
      console.log(input)
    }
  const handlesumite=(e)=>{
    e.preventDefault();  
    let api="http://localhost:3000/student";
    axios.post(api,input).then((res)=>{
      console.log(res)
      alert("data successfully save")
    })

  }

    return(
        <>
       <Form style={{width:"600px",margin:"20px 200px 20px  380px",padding:"30px",border:"4px solid blue"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Roll no</Form.Label>
        <Form.Control type="text" value={input.rollno}   name='rollno' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={input.name} name='name' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" value={input.city} name='city' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Frees</Form.Label>
        <Form.Control type="text" value={input.fees} name='fees' onChange={handleInput} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handlesumite}>
        Submit
      </Button>
    </Form>

        </>
    )
}

export default Insert