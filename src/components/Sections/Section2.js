import React from 'react'
import Container from 'react-bootstrap/Container';
import './Section2.css'
import { SlDiamond } from 'react-icons/sl';
import { BsLaptop } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import { AiOutlineHeart } from 'react-icons/ai';

 function Section2() {
  return (
    <>
       <Container className='basliq' >
        <h2>At Your Service</h2>
        <hr className='bolen'></hr>
    <div className='row'>
  <div className='column '>
    <h3 className='icon'><SlDiamond /></h3>
    <h3 className='h4 mb-2 alo'>Sturdy Themes</h3>
    <p className='text-muted mb-0'>Our themes are updated regularly to keep them bug free!</p>
    
  </div>
  <div className='column' >
  <h3 className='icon'><BsLaptop /></h3>
    <h3 className='h4 mb-2'>Up to Date</h3>
    <p className='text-muted mb-0'>All dependencies are kept current to keep things fresh.</p>
    
  </div>
  <div className='column' >
  <h3 className='icon'><TfiWorld /></h3>
    <h3 className='h4 mb-2'>Ready to Publish</h3>
    <p className='text-muted mb-0'>You can use this design as is, or you can make changes!</p>
   
  </div>
  <div className='column' >
  <h3 className='icon'><AiOutlineHeart /></h3>
    <h3 className='h4 mb-2'>Made with Love</h3>
    <p className='text-muted mb-0'>Is it really open source if it's not made with love?</p>
  </div>
</div>
</Container>

    </>
  )
}
export default Section2;
