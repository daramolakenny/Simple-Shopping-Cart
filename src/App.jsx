import './index.css';
import {
  Routes, Route
} from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary';
import Errorflag from './component/Errorflag';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Sign_in';
import Signup from './pages/Signup';
import SingleProduct from './pages/SingleProduct';
import Logout from './pages/Logout';
import Sign_in from './pages/Sign_in';
// import ThemeContextProvider from './context/ThemeContextProvider';


function App() {
  return (
    // <ThemeContextProvider>
      <div className='w-full min-h-screen bg-slate-100'>
        <ErrorBoundary FallbackComponent={Errorflag} onError={(error, infor) => {
          // infor = "Something went wrong";
          console.error("Logged error:", error, infor);
        }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/sign_in' element={<Sign_in />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/singleproduct' element={<SingleProduct />} />
          </Routes>
        </ErrorBoundary>
      </div>
    // </ThemeContextProvider>
  )
}

export default App
