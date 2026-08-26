import BlogHero from '../sections-blog/BlogHero'
import BlogContent from '../sections-blog/BlogContent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShopFeatures from '../sections-shop/ShopFeatures'

function Blog() {

  return (
    <>
      <Navbar/>
      <BlogHero/>
      <BlogContent/>
      <ShopFeatures/>
      <Footer/>
    </>
  )
}

export default Blog
