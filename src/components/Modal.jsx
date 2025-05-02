
import { useState,useRef } from "react";
import axios from "../axios";
import Spinner from "./Spinner";



const Modal = ({label, idMeal}) => {
    const [meal, setMeal] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [ytLink, setYtLink] = useState(null);
    const [ingredientsList,setIngredientsList] =  useState([]);
   

    const openModal = async() =>{
        document.getElementById(`my_modal_${idMeal}`).showModal();
        try{
            setLoading(true)
            const res = await axios.get(`/lookup.php?i=${idMeal}`);
            console.log(res.data.meals)
            setMeal(res.data.meals[0])
            setYtLink(`https://www.youtube.com/embed/${res.data.meals[0].strYoutube?.split('v=')[1]}`)
            
            const ingredients = []
        
         
            for (let i = 1; i <= 20; i++) {
                const ingredient = res.data.meals[0][`strIngredient${i}`];
                const measure = res.data.meals[0][`strMeasure${i}`];
              
                if (ingredient && ingredient.trim()) {
                    ingredients.push(`${measure?.trim()} ${ingredient?.trim()}`);
                }
            }

            setIngredientsList(ingredients);
            console.log(ingredients)
            
         
        }catch(error){
            setErrorMessage(error.message)
            console.log(error)

        }finally{
            setLoading(false);
        }
    }

    const areaFalgs = {
        American: "us",
        British: "gb",
        Canadian: "ca",
        Chinese: "cn",
        Croatian: "hr",
        Dutch: "nl",
        Egyptian: "eg",
        Filipino: "ph",
        French: "fr",
        Greek: "gr",
        Indian: "in",
        Irish: "ie",
        Italian: "it",
        Jamaican: "jm",
        Japanese: "jp",
        Kenyan: "ke",
        Malaysian: "my",
        Mexican: "mx",
        Moroccan: "ma",
        Polish: "pl",
        Portuguese: "pt",
        Russian: "ru",
        Spanish: "es",
        Thai: "th",
        Tunisian: "tn",
        Turkish: "tr",
        Ukrainian: "ua",
        Uruguayan: "uy",
        Vietnamese: "vn",
      };

  return (
    <>
        <button className="btn bg-blue-600 hover:bg-blue-700"  onClick={() => openModal()}>
            {label}
        </button>

        <dialog id={`my_modal_${idMeal}`} className="modal modal-middle">
            <div className="modal-box w-11/12 max-w-5xl ">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-dots loading-lg "></span>
                    </div>
                ) : 
                (errorMessage ? <p className="text-4xl text-center">{errorMessage}</p> :
                    <div className="">
                            <h3 className="font-kanit text-4xl text-center py-2 font-light bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">{meal.strMeal}</h3>
                            <h3 className="font-kanit text-lg border-b-2 py-2 border-blue-600 font-light">Category: {meal.strCategory}</h3>
                           
                      
                                <h3 className="font-kanit text-lg border-b-2 py-2 border-blue-600 font-light flex gap-2 items-center">
                                    Country: {meal.strArea} 
                                    <span> <img src={`https://flagcdn.com/24x18/${areaFalgs[meal.strArea]  }.png`} alt="Area Flag" /></span>
                                    

                                
                         
                                </h3>
                               
                  
                          
                           
                            <h3 className="font-kanit text-lg border-b-2 py-2  border-blue-600 font-light">Insturctions</h3>
                            <p className="text-justify py-2 font-kanit font-light">{meal.strInstructions}</p>
                            <h3 className="font-kanit text-lg border-b-2 py-2 border-blue-600">Ingredients</h3>
                            <ul>
                                {ingredientsList.map((item,index) =>
                                    <li key={index} className="font-kanit font-light first:pt-2 last:pb-2">{item}</li>
                                 )}
                            </ul>

                            <div className="container flex items-center justify-center">
                                <iframe className="w-full auto sm:h-[350px]"    src={ytLink} ></iframe>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn bg-blue-600" onClick={()=> setYtLink(null)}>Close</button>
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=> setYtLink(null)}>✕</button>
                                </form>
                            </div>
                        
                    </div>
                
                )}
                
            </div>
        </dialog>
    </>
  );
};

export default Modal;
