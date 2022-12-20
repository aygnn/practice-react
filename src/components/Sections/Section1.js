import React from 'react'
import './Section1.css'

 function Section1() {
  return (
   <>
    <section className='section1'>
      <img ></img>
    
        <div className='orta'>
          <h1>Your Favorite Place for Free Bootstrap Themes</h1>
          <hr className='divider'></hr>
        </div>
        <div className='asagi'>
        <p className='text-white-75 mb-5'>Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
          <a className='btn btn-primary btn-xl' >Find Out More</a>
        </div>
      

    </section>
    <section className='section2'>
        <div className='narinci'>
            <div className='icindeki'>
            <h2>We've got what you need!</h2>
            <hr className='divider divider-light'></hr>
            <p className='text-white-75 mb-4'>Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
            <a className='btn btn-light btn-xl'>Get Started!</a>
            </div>
        </div>
    </section>
    
    
    </>

  )
}
export default Section1;