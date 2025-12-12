import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
// import {  }
// import { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContextProvider';

const Navlinks = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

 const mobileToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className='w-full'>
      <div className='flex justify-around shadow-2xl p-4'>
        <div className='px-4'>
          <Link to={'/'}>
            <h1 className='text-2xl'>Shop<span className='underline text-yellow-400'>ty</span></h1>
          </Link>
        </div>

        <ul
          className='hidden md:flex justify-around text-[20px]'
        >
          <li 
            className='cursor-pointer hover:text-yellow-400 px-4'
          >
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li 
            className='cursor-pointer hover:text-yellow-400 px-4'
          >
            <Link to={'/product'}>
              Product
            </Link>
          </li>
          <li 
            className='cursor-pointer hover:text-yellow-400 px-4'
          >
            <Link to={'/cart'}>
              Cart
            </Link>
          </li>
        </ul>

        <ul
          className='hidden md:flex justify-around text-[20px]'
        >
          <div className='px-4 cursor-pointer hover:text-yellow-400'>
            <Link to={'/account'}>
              <h2 className='text-[20px]'>Account</h2>
              <svg viewBox="0 0 24 24" class="ic -fsh0 -mls" width="18" height="18"></svg>
            </Link>
          </div>
          <li 
            className='cursor-pointer hover:text-yellow-400 px-4'
          >
            <Link to={'/help'}>
              Help
            </Link>
          </li>
          <li 
            className='cursor-pointer hover:text-yellow-400 px-4'
          >
            <Link to={'/cart'}>
              Cart
            </Link>
          </li>
        </ul>

        <div className='md:hidden mt-2 ml-auto'>
          <button
            onClick={mobileToggle}
            aria-label='toggle menu'
            aria-expanded={setMobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6 ml-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      l         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className='block md:hidden bg-slate-50 leading-loose shadow-2xs text-[20px]'>
          <ul
            className='text-emerald-950 px-4 leading-loose '
          >
            <li 
              className='cursor-pointer hover:text-violet-500'
            >
              <Link to={'/'}>
                Home
              </Link>
            </li>
            <li 
              className='cursor-pointer hover:text-violet-500'
            >
              <Link to={'/product'}>
                Product
              </Link>
            </li>
            <li 
              className='cursor-pointer hover:text-violet-500'
            >
              <Link to={'/cart'}>
                Cart
              </Link>
            </li>
          </ul>
          <div className='bg-violet-500 text-center mx-2 rounded-2xl'>
            <Link to={'/sign_in'}>
              <button className='px-4 py-1 rounded-2xl text-white'>Sign In</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navlinks