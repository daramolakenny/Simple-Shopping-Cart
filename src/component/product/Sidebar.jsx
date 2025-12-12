import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='px-4 py-4 h-full'>
      <div className='px-4 py-4 bg-gray-100'>
        <Link to={'/'}>
          <h1 className='text-2xl'>Shop<span className='underline text-red-400'>ty</span></h1>
        </Link>
      </div>

      <ul
          className='flex flex-col leading-20 text-[20px]'
        >
          <li 
            className='cursor-pointer hover:text-red-400 px-4'
          >
            <Link to={'/'}>
              Baby Bag
            </Link>
          </li>
          <li 
            className='cursor-pointer hover:text-red-400 px-4'
          >
            <Link to={'/product'}>
              Adult Bag
            </Link>
          </li>
          <li 
            className='cursor-pointer hover:text-red-400 px-4'
          >
            <Link to={'/cart'}>
              Casual Bag
            </Link>
          </li>
          <li 
            className='cursor-pointer hover:text-red-400 px-4'
          >
            <Link to={'/cart'}>
              Laptop Bag
            </Link>
          </li>
          <li 
            className='cursor-pointer hover:text-red-400 px-4'
          >
            <Link to={'/cart'}>
              Mens Cross Bag
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar