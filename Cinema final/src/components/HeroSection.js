import React from 'react';
import '../App.css';
import './HeroSection.css';
import atual1 from './Editado/atual1.jpg'
import atual2 from './Editado/atual2.jpg'
import atual3 from './Editado/atual3.jpg'
import atual4 from './Editado/atual4.jpg'
import antigo1 from './Editado/antigo1.jpg'
import antigo2 from './Editado/antigo2.png'
import antigo3 from './Editado/antigo3.jpg'
import antigo4 from './Editado/antigo4.jpg'
import preco1 from './Editado/preco1.png'

function HeroSection() {
  return (
    <div className='hero-container'>
      <div>
        <div className='Baner'>
          <img id="baner" src={preco1} alt="Preço" />
        </div>
        <h1>Em cartaz</h1>
      </div>
      <div className='atual'>
        <img onClick={() => window.location.href="./Services" }src={atual1} alt=''></img>
        <img onClick={() => window.location.href="./Services" }src={atual2} alt=''></img>
        <img onClick={() => window.location.href="./Services" }src={atual3} alt=''></img>
        <img onClick={() => window.location.href="./Services" }src={atual4} alt=''></img>
      </div>
      <hr></hr>
      <div>
        <h1>Em breve</h1>
      </div>
      <div className='atual'>
        <img onClick={() => window.location.href="./Services" }src={antigo1} alt=''></img>
        <img onClick={() => window.location.href="./Services" }src={antigo2} alt=''></img>
        <img onClick={() => window.location.href="./Services" }src={antigo3} alt=''></img>
        <img onClick={() => window.location.href="./Services" }src={antigo4} alt=''></img>
      </div>     
    
    </div>
  );
}

export default HeroSection;
