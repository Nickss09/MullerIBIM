import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
 return (
    <>
      <Header />
      <main className="gallery">
      <Card
        produto='Bolsa - Pochette Métis'
        descricao='R$ 17.700,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pochette-metis--M44875_PM2_Front%20view.jpg'
      />
      <Card
        produto='Bolsa - Slouchy MM Monogram'
        descricao='R$ 18.000,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolsa-slouchy-pm--M11952_PM2_Front%20view.jpg'
      />
      <Card
        produto='Bolsa - Speedy Bandoulière'
        descricao='R$ 11.900,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolsa-speedy-bandouliere-25--M46977_PM2_Front%20view.jpg'
      />
      <Card
        produto='Bolsa - Boulogne'
        descricao='R$ 16.800,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolsa-boulogne--M45832_PM2_Front%20view.jpg'
      />
      <Card
        produto='Bolsa Croissant MM'
        descricao='R$ 20.500,00'
        link='https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--M46828_PM2_Front%20view.jpg?wid=750&hei=870'
      />
        </main>
      <Footer />
    </>
  )
}

export default App
