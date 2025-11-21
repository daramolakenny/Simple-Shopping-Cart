import Navlinks from '../component/Navlinks';
import Hero from '../component/Hero';
import Features from '../component/Features';
import Testimony from '../component/Testimony';
import Footer from '../component/Footer'; 

const Home = () => {
  return (
    <div>
      <Navlinks />
      <Hero />
      <Features />
      <Testimony />
      <Footer /> 
    </div>
  )
}

export default Home