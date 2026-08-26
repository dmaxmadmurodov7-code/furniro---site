import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ShopFeatures from "../sections-shop/ShopFeatures"
import ShopFilter from "../sections-shop/ShopFilter"
import ShopHero from "../sections-shop/ShopHero"
import ShopProducts from "../sections-shop/ShopProducts"

function Shop() {

  return (
    <>
      <Navbar/>
      <ShopHero/>
      <ShopFilter/>
      <ShopProducts/>
      <ShopFeatures/>
      <Footer/>
    </>
  )
}

export default Shop
