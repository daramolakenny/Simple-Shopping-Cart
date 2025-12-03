import Navlinks from '../component/Navlinks';
import Features from '../component/Features';
import Contact from './Contact';
import Footer from '../component/Footer'; 

const Home = () => {
  return (
    <div className=''>
      <Navlinks />
      <Features />
      <Contact />
      <Footer /> 
    </div>
  )
}

export default Home