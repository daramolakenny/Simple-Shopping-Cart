import React from 'react'

const Card = ({ productName, image, category, price, available, icon, rating }) => {
  return (
    // productName, category, price, increment, decrement, available, productImage
    <div className=''>
        <div>{image}</div>
        <div>
            <h3>{productName}</h3>
            <div className='justify-between flex'>
                <p>{price}</p>
                <p>{icon}</p>
            </div>
            <p>{rating}</p>
            <div className='flex justify-between'>
                <p>{category}</p>
                <p>{available ? "In Stock" : "Out of Stock"}</p>
            </div>
        </div>
    </div>
  )
}

export default Card