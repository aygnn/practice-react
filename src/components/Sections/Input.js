import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import './Input.css'
import { CiMobile2 } from 'react-icons/ci';


function Input() {
   const[name,setName]=useState('')
    const[username,setUsername]=useState('')
    const[age,setAge]=useState('')
    const[message,setMessage]=useState('')
    const [array,setArray]=useState([]);
   const Name=(e)=>{
    setName(e.target.value)
   
  }
  const Username=(e)=>{
    setUsername(e.target.value)
  }
  const Age=(e)=>{
    setAge(e.target.value)
  }
  const Message=(e)=>{
    setMessage(e.target.value)
}

   const handleSubmit=(e)=>{
    e.preventDefault()
    if(name.trim()===''|| username.trim()===''|| age.trim()==='' || message.trim()===''){
      alert("Please fill the form")
    }
    else{
  
      const obj=
        {
            name:name,
            username:username,
            age:age,
            message:message
            
        };
        setArray([...array,obj])
  
     
      setName('');
      setUsername('');
      setAge('');
      setMessage('');
    }}
  return (
  <>
   <Container className='form' >
   <div className='tepesi'>
                    <div className='cay'>
                        <h2 className='mt'>Let's Get In Touch!</h2>
                        <hr className='bolucu'></hr>
                        <p className='text'>Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                    </div>
                </div>
    
  <form onSubmit={handleSubmit}>
    <input className="inputs" value={name} onChange={Name} placeholder="FullName"></input>
    <input className="inputs" value={username} onChange={Username}  placeholder="Email Address" type="mail"></input>
    <input className="inputs" value={age} onChange={Age}  type="number" placeholder="Phone Number"></input>
    <input className="message" value={message} onChange={Message}   placeholder="Message"></input>
    <button className='btn btn-primary btn-xl disabled" id="submitButton' type="submit">Submit</button>
</form>
<div className='phone'>
    <CiMobile2 />     
      <div className='number' >+1 (555) 123-4567</div>
       </div>
</Container>
    </>
  )
}
export default Input
