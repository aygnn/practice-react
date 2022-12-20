import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Navbarrr.css'

function Navbarrr() {
  const[navbar,setNavbar]=useState(false)

 const changeBackground=()=>{
  if(window.scrollY>=50){
    setNavbar(true)
  }
  else{
    setNavbar(false)
  }
 }
 window.addEventListener('scroll',changeBackground)


  

    return (
      <>
      <nav className={navbar? 'navbar active': 'navbar'}>
      <div className='main'>
    <Container className='container' >
      <Row className='row'>
        <Col className='col-6'><div>Start Bootstrap</div></Col>
        <Col className='col-6'>
          <div>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    </nav>
    

    </>
  )
    }

export default Navbarrr;




