import StarRating from '../component/product/Starrating';
import { useState } from 'react';
import Card from '../component/product/Card'
import Bag1 from '../assets/img/Adultbag/Bag1.png';
import Bag2 from '../assets/img/Adultbag/Bag2.png';
import Bag4 from '../assets/img/Adultbag/Bag4.png';
import Bag5 from '../assets/img/Adultbag/Bag5.png';
import Bag6 from '../assets/img/Adultbag/Bag6.png';
import Bag7 from '../assets/img/Adultbag/Bag7.png';
import Bag8 from '../assets/img/Adultbag/Bag8.png';
import Bag9 from '../assets/img/Adultbag/Bag9.png';
import Bag10 from '../assets/img/Adultbag/Bag10.png';
import Bag11 from '../assets/img/Adultbag/Bag11.png';
import Bag12 from '../assets/img/Adultbag/Bag12.png';
import Bag13 from '../assets/img/Adultbag/Bag13.png';
import Bag14 from '../assets/img/Adultbag/Bag14.png';
import Bag15 from '../assets/img/Adultbag/Bag15.png';
import Bag16 from '../assets/img/Adultbag/Bag16.png';
import Bag17 from '../assets/img/Adultbag/Bag17.png';
import Bag18 from '../assets/img/Adultbag/Bag18.png';
import Bag19 from '../assets/img/Adultbag/Bag19.png';

const Product = () => {
    const [hover, setHover] = useState(null);

  return (
    <div className='flex justify-around bg-slate-50'>
        <div className='justify-around px-2 py-20'>
            <div className="md:max justify-center flex flex-wrap gap-12">
                {[Bag1,Bag2,Bag4,Bag5,Bag6,Bag7,Bag8,Bag9,Bag10,Bag11,Bag12,Bag13,Bag14,Bag15,Bag16,Bag17,Bag18,Bag19,Bag1,Bag5].map((bag, index) => (
                    <div 
                        key={index}
                        className={` ${hover === index ? 'shadow-2xl rounded-2xl' : ''} w-60 h-98 justify-center items-center px-1 text-[18px] border border-gray-200 rounded-sm`}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(null)}
                    >
                        <Card 
                            image={<img src={bag} className='h-58' />}  
                            price={<div>₦100</div>}
                            rating={<StarRating />}
                            productName={'School Bag'}
                            category={'School Bag'}
                            available={true}
                        />
                        { hover === index && (
                            <button 
                                className='bg-yellow-400 py-2 text-white w-full mt-2 rounded-sm'
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <div className='pt-10'>
                <button className='cursor-pointer bg-amber-300 p-3 font-bold rounded-md'>Load More</button>
            </div>
        </div>
    </div>
  )
}

export default Product