import React from 'react';
import '../../App.css';
import  pipoca1 from '../Editado/pipoca1.png';
import  refri1 from '../Editado/refri1.png';
import  Footer from '../Footer';


export default function Products() {
  return( <>
  <div className='products'>
    
    <h1 id='t1'> Confira nossas ofertas --> </h1>
   

   <div className='img2'>

    <img src={pipoca1}></img>
   </div>
   
   <div className='img3'>

   <img src={refri1}></img>
   </div>


   
  </div>
   <Footer></Footer>  
  </>
  )
}
