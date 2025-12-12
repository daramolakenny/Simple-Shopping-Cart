import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='border-b border-b-slate-300 pt-10 pb-4'>
        <ul className='mx-18 md:ml-14 flex justify-between'>
            <li>
                Navbar
            </li>
            <li>
                <button
                    className='text-2xl'
                    onClick={toggleTheme}
                >
                    {theme === 'dark' ? <FaMoon /> : <FaSun /> }
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar