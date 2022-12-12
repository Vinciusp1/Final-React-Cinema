import React from 'react';
import '../../App.css';
import Sobre from '../Editado/Sobre.jpg'
import Footer from '../Footer';

export default function Services() {
  return (
   <>
   <div className='services'>
      
      <img id='sobre' src={Sobre}></img>
      <h1 id='titulo'>Quem somos</h1>
      <div className='textosobre'>
        <br></br>
        <p>Nossa empresa nasceu com um pequeno grupo de jovens empreendedores que queriam criar um cinema de qualidade e de custo acessível que conseguisse alcançar todas as idades.
                Criado em 2018, iniciou-se um grande projeto para a criação dessa rede de cinemas focada em lançamentos e reexibição de clássicos de outras décadas. Hoje estamos aqui para transmitir os melhores filmes na qualidade de última geração para nossos telespectadores.</p>
      
      </div>
    </div>
    <Footer/> 
    </>
  )
}
  