import { useState } from "react"
import { FaStar } from "react-icons/fa";


export default function StarRating({noStar = 5}){
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    
    function handleClick(getCurentStar) {
        setRating(getCurentStar);
    }
                                        
    function handleMouseEnter(getCurentStar) {
        setHover(getCurentStar);
        // console.log(getCurentStar);
    }

    function handleMouseLeave(getCurentStar) {
        setHover(rating);
        // console.log(getCurentStar);
    }

    return <div className="flex">
        { [...Array(noStar)].map((_,index) => {
            index += 1

            return <FaStar
                key={index}
                className={`${index <= (hover || rating) ? "text-yellow-400" : "text-black"} cursor-pointer`}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={20}
            />
        })

        }
    </div>
}