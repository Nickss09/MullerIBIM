import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loja de Luxo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&family=League+Script&family=Sevillana&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header">
    <div class="logo">
      <img src="https://yt3.googleusercontent.com/k6PuePE0iigmugaaWu3dO89BsWvATAQv3rD3nEY5lu78bgzupAPS0zFaF1K5nuGgXQl_ukmXVA=s160-c-k-c0x00ffffff-no-rj" alt="Louis Vuitton">
    </div>
    <div class="marca">
        <h4>Louis Vuitton</h4>
    </div>
  </header>
  <div class="banner">
    <img src="https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--WOMEN_SS25_SHOW_%20KEY_LOOKS_LV-COM_DI3.jpg?wid={IMG_WIDTH}&hei={IMG_HEIGHT}"
        class="img" style="width: 100%;">
</div>

  <main class="gallery">
    <div class="card" data-status="Esgotado">
        <img src="https://i.pinimg.com/736x/d6/56/ac/d656ac49e6a11b1c9b14015a3b190b76.jpg" class="Q">
        <button class="buy-button">Comprar</button>
        <p class="price">$200.00</p>
    </div>
    <div class="card" data-status="">
        <img src="https://i.pinimg.com/736x/0a/bc/35/0abc35a58abec8f491b49c481def3a66.jpg" class="Q">
        <button class="buy-button">Comprar</button>
      <p class="price">$259.50</p>
    </div>
    <div class="card" data-status="20% off">
        <img src="https://i.pinimg.com/236x/4d/72/e2/4d72e2527fab5b9ad789c6b6b406e05d.jpg" class="Q">
        <button class="buy-button">Comprar</button>
      <p class="price">$200.00</p>
    </div>
    <div class="card" data-status="Esgotado">
        <img src="https://i.pinimg.com/236x/1f/e2/78/1fe2786573e166cc1a4f8c315b17f786.jpg" class="Q">
        <button class="buy-button">Comprar</button>
      <p class="price">$290.00</p>
    </div>
    <div class="card" data-status="">
        <img src="https://i.pinimg.com/236x/19/7b/41/197b4180394faf2b09aade7096bee20a.jpg" class="Q">
        <button class="buy-button">Comprar</button>
        <p class="price">$900.00</p>
      </div>
      <div class="card" data-status="Esgotado">
        <img src="https://i.pinimg.com/736x/00/2e/35/002e35d6a26ed459d8efcbd43837c20e.jpg" class="Q">
        <button class="buy-button">Comprar</button>
        <p class="price">$1000.00</p>
      </div>
      <!-- Segunda seção -->
      <div class="card" data-status="">
        <img src="https://i.pinimg.com/736x/98/44/7a/98447a075a2291a3bd02557893a791ec.jpg" class="Q">
        <button class="buy-button">Comprar</button>
        <p class="price">$1600.00</p>
      </div>
      <div class="card" data-status="20% off">
        <img src="https://i.pinimg.com/736x/e2/70/28/e27028e368146d7cf1322180653ca34f.jpg" class="Q">
        <button class="buy-button">Comprar</button>
        <p class="price">$3400.000</p>
      </div>
      <div class="card" data-status="Esgotado">
        <img src="https://i.pinimg.com/736x/e9/49/95/e9499572cd6d4ad5d848e0e551a3ba43.jpg" class="Q">
        <button class="buy-button">Comprar</button>
        <p class="price">$7800.00</p>
      </div>
      <div class="card" data-status="">
        <img src="https://i.pinimg.com/736x/e5/47/dc/e547dc74236017ffff4850b6aa14d2ba.jpg" class="Q">
        <button class="buy-button">Comprar</button>
        <p class="price">$2900.000</p>
      </div>
      <div class="card" data-status="20% off">
        <img src="https://i.pinimg.com/736x/a2/f0/7c/a2f07cdce8fb65c922fed942c557436c.jpg" class="Q">
        <button class="buy-button">Comprar</button>
        <p class="price">$900.00</p>
      </div>
      <div class="card" data-status="">
        <img src="https://i.pinimg.com/736x/23/03/c5/2303c51acded53e960e20e06f02146ce.jpg" class="Q">
        <button class="buy-button">Comprar</button>
        <p class="price">$9000.00</p>
      </div>
  </main>

  <footer class="footer">
    <div class="logo-footer">
      <img src="https://yt3.googleusercontent.com/k6PuePE0iigmugaaWu3dO89BsWvATAQv3rD3nEY5lu78bgzupAPS0zFaF1K5nuGgXQl_ukmXVA=s160-c-k-c0x00ffffff-no-rj" 
           alt="Logo Louis Vuitton">
    </div>
    <p>Nos siga nas nossas redes sociais</p>
    <div class="social-icons">
      <a href="https://pt-br.facebook.com/LouisVuitton/events/">
        <img src="https://i.pinimg.com/736x/94/d9/3a/94d93aa1d0dbc775787d26f412431d12.jpg" alt="Facebook">
      </a>
      <a href="https://www.instagram.com/louisvuitton/">
        <img src="https://i.pinimg.com/736x/3f/cc/39/3fcc393efcfa77d0424970e67f4f97c3.jpg" alt="Instagram">
      </a>
      <a href="https://br.linkedin.com/company/louis-vuitton">
        <img src="https://i.pinimg.com/736x/19/40/ab/1940abcfbcbdbdb11b1b8fdbf2f01973.jpg" alt="LinkedIn">
      </a>
      <a href="https://www.youtube.com/channel/UC5q0PIKGr2lGOsiT14AlEYg">
        <img src="https://i.pinimg.com/736x/78/91/ee/7891ee94ef06cd85bf3aa3e3bd2deadf.jpg" alt="YouTube">
      </a>
    </div>
    <p>Louis Vuitton FashionDay</p>
    <p>101 Champs-Élysées, Paris/FR - 01234-5678</p>
  </footer>
</body>
</html>
    </>
  )
}

export default App
