import Button from "./Button";
import { Link } from "react-router";
const Card = ({
    imgUrl=null, 
    title='', 
    description='',
    id,
    showButton=false

})=>{

    return (
        <div>
            <div className="card bg-base-300 w-full shadow-lg h-[386px]">
                <figure>
                    <img
                    src={imgUrl}
                    alt="Meal Thumbnail" className="object-contain" />
                </figure>
                <div className="card-body">
                    <h2 className=" font-kanit text-center break-words py-2 text-lg">{title}</h2>
                    <p className="font-kanit font-light text-center break-words  ">
                            {description ? `${description.slice(0,100)} ...` : '' }
                    </p>
                    <div className="card-actions justify-center">
                        {showButton ? <Button label='View Recipe'/> : <Link className="underline font-kanit tracking-wide">View Details</Link>}
                    </div>
                </div>
            </div>

        </div>);
}

export default Card;