import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useDebounce } from "use-debounce";
import Spinner from "../components/Spinner";

const HomePage = ()=>{

    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedText] = useDebounce(searchTerm, 1000); 
    const [data, loading, errorMessage] = useFetch(`/filter.php?i=${debouncedText}`);
  

    return(
        <section >
            <div className="max-container flex flex-col justify-center items-center padding-x">
                <div className="text-center max-w-3xl grid grid-col-1 gap-4 padding-y">
                    <h1 className="text-5xl font-kanit ">Dishcovery</h1>
                    <p className="font-kanit font-light text-gray-300 py-5 break-words text-center">Dishcovery helps you explore meals by area, ingredients, and category. Discover new flavors, find what you can cook now, and explore global cuisine—all in one simple, smart platform.</p>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search by ingredients (eg. 'Chicken Breast' )"/>
                </div>
              
                    {loading ? 

                    ( <Spinner/>):
                    (errorMessage ? <p>{errorMessage}</p> : 
                        data.meals == null ? <p className="text-4xl text-center">Sorry, I can't find this ingredient. :((</p> :
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
                                  { data.meals.map((d, i) => 
                                <Card  key={i} imgUrl={d.strMealThumb} title={d.strMeal} id={d.idMeal} showButton={true}/>
                              
                                )}
                            </div>
                        )
                    }
                    
            </div>           
        </section>
    );
}

export default HomePage