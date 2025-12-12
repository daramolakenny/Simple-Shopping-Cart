import Navlinks from '../component/Navlinks';
import Features from '../component/Features';
import Contact from './Contact';
import Footer from '../component/Footer';
import Product from './Product';

const Home = () => {
  return (
    <div className='w-full  bg-slate-100'>
      <div className=''>
        <Navlinks />
        <Product />
        <Contact />
        <Footer /> 
      </div>
    </div>
  )
}

export default Home