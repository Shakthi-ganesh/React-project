import { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function App() {
     const [todos,setTodos]=useState([])
        
    useEffect(()=> {
          fetch("http://localhost:3000/api/todos").then(response=>{
            return response.json()
          }).then(response=>{
              setTodos(response.data)
          })
    },[])


  return (
    <div className="App">
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Button variant="primary"><i class="fas fa-moon fa-lg fa-fw"></i></Button>{' '}

          </Nav>
        </Container>
      </Navbar>
      <h1 className="text-center">Hello world </h1>
      <div style={{
    display: "flex",
    alignItems : "center",
    justifyContent :"center"
}}> 



      <InputGroup style={{width:"300px"}} className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-success" id="button-addon2">
        <i class="fa fa-add"></i>
        </Button>
      </InputGroup>
      </div>
      <div className="mt-4">
                <Nav justify variant="tabs" defaultActiveKey="?list=BLIND75">
                    <Nav.Item >
                        <Nav.Link eventKey="?list=BLIND75">
                            <span className="tab-font">Todos</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="link-1">
                            <span className="tab-font">Completed</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                            <span className="tab-font">Deleted</span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <ul className="list-group">

{todos.map(el =>{
       return <li className="list-group-item my-list-item" style ={{display:"flex",justifyContent : 'space-between' , alignItems :"center"}}> 
       <input className="form-check-input me-1" type="checkbox" value="" id="Checkbox0"/>
           <label className="form-check-label" for="Checkbox0"></label>
           <button className="btn btn-outline-danger" >
               <i className="fas fa-close fa-lg fa-fw"></i>
               </button>
   </li>
})}
</ul>
    </div>
  )
}

export default App