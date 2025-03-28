import React from 'react'
import './Footer.css'

function Footer(){
    return (
        <>
            <footer className="footer">
    <div className="logo-footer">
      <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" 
           alt="Logo Louis Vuitton"/>
    </div>
    <p>Nos siga nas nossas redes sociais</p>
    <div className="social-icons">
      <a href="https://pt-br.facebook.com/LouisVuitton/events/">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" alt="Facebook"/>
      </a>
      <a href="https://www.instagram.com/louisvuitton/">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" alt="Instagram"/>
      </a>
      <a href="https://br.linkedin.com/company/louis-vuitton">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" alt="LinkedIn"/>
      </a>
      <a href="https://www.youtube.com/channel/UC5q0PIKGr2lGOsiT14AlEYg">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" alt="YouTube"/>
      </a>
    </div>
    <p>Louis Vuitton FashionDay</p>
    <p>101 Champs-Élysées, Paris/FR - 01234-5678</p>
            </footer>
            </>
    )
}
export default Footer