import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Categories from '../sections/Categories'
import Gallery from '../sections/Gallery'
import Hero from '../sections/Hero'
import Inspiration from '../sections/Inspiration'
import Products from '../sections/Products'

function Home() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Products/>
      <Inspiration/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default Home
