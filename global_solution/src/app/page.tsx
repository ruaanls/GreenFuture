import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <main className='pginicial-container'>
      <div className='container-inicio'>
        <div className='txt-inicial'>
          <p>EcoGreen</p>
          <h1>Utilize a <span>tecnologia</span> para garantir um futuro mais <span>sustentável.</span></h1>
          <p className='texto-home'>Entenda como a tecnologia pode ajudar na implantação de novas fontes de energias renováveis e o que você pode fazer em relação a isso.</p>
          <button className='botao-home'><h2>Saiba Mais</h2></button>
        </div>
      </div>
      <div className='container-sobre'>
        <div className="img-sobre">
          <img src="/" alt="IMG SOBRE NÓS" />
        </div>
        <div className='txt-sobre'>
          <h1 className='text-[2rem]'>Quem somos nós?</h1>
          <p className='text-[1.3rem] w-[50%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sit reprehenderit maiores, rerum sequi commodi.</p>
        </div>
        
      </div>


      <h1>Quais são as energias renováveis?</h1>
      <div className='energias-container'>
        <div className='card-energias'>
          <h1>Energia lorem</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='card-energias'>
          <h1>Energia lorem</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='card-energias'>
          <h1>Energia lorem</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className='carbono-container'>
        <div className='txt-carbono'>
          <h1>Calcule a sua <span>pegada de carbono</span> e entenda como ela interfere nas <span>energias renováveis</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aliquam!</p>
          <button className='botao-carbono'>Calcular minha pegada</button>
        </div>
        <div className='img-carbono'>
          
        </div>
      </div>


      <h1>Áreas impactadas</h1>
      <div className='areas-container'>
        <div className='card-areas'>
          <h1>Area1</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='card-areas'>
          <h1>Area1</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='card-areas'>
          <h1>Area1</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      
    </main>
  )
}
