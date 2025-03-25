
import './App.css'

function App() {
 return (
    <>
 <header className="header">
    <div className="logo">
      <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" alt="Louis Vuitton" />
    </div>
    <div className="marca">
        <h4>Louis Vuitton</h4>
    </div>
  </header>
  {/* <div className="banner">
    <img src="https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--WOMEN_SS25_SHOW_%20KEY_LOOKS_LV-COM_DI3.jpg?wid={IMG_WIDTH}&hei={IMG_HEIGHT}"
        className="img" style="width: 100%;"/>
</div> */}
   <main className="gallery">
   <div className="card" data-status="Esgotado">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
        <p className="price">$200.00</p>
    </div>
<div className="card" data-status="">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
      <p className="price">$259.50</p>
    </div>
    <div className="card" data-status="20% off">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
      <p className="price">$200.00</p>
    </div>
    <div className="card" data-status="Esgotado">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
      <p className="price">$290.00</p>
    </div>
    <div className="card" data-status="">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
        <p className="price">$900.00</p>
      </div>
      <div className="card" data-status="Esgotado">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
        <p className="price">$1000.00</p>
      </div>
      
      <div className="card" data-status="">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
        <p className="price">$1600.00</p>
      </div>
      <div className="card" data-status="20% off">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
        <p className="price">$3400.000</p>
      </div>
      <div className="card" data-status="Esgotado">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
        <p className="price">$7800.00</p>
      </div>
      <div className="card" data-status="">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
        <p className="price">$2900.000</p>
      </div>
      <div className="card" data-status="20% off">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
        <p className="price">$900.00</p>
      </div>
      <div className="card" data-status="">
        <img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png" className="Q"/>
        <button className="buy-button">Comprar</button>
        <p className="price">$9000.00</p>
      </div>

   </main>
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

export default App
