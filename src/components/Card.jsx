import Button from "./Button";

const Card = ({meals:{idMeal, strMeal, strMealThumb}})=>{

    return (
        <div>
            <div className="card bg-base-300 w-full shadow-lg h-[386px]">

                <figure>
                    <img
                    src={strMealThumb}
                    alt="Meal Thumbnail" className="object-contain" />
                </figure>
                <div className="card-body">
                    <h2 className=" font-kanit text-center break-words py-2 text-lg">{strMeal}</h2>
                
                    <div className="card-actions justify-center">
                        <Button/>
                    </div>
                </div>
            </div>

        </div>);
}

export default Card;