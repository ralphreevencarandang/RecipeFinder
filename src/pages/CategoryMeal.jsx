import { useParams } from "react-router";
import Search from "../components/Search";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
const CategoryMeal = ()=>{

    const [searchTerm, setSearchTerm] = useState('');
    const {category} = useParams();

    const [data,loading,errorMessage] = useFetch(`/filter.php?c=${category}`);

    

    return(
        <section className="max-container padding-x flex flex-col justify-center items-center">
            <div className="text-center max-w-3xl padding-y ">
                    <h1 className="text-5xl font-kanit bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">{category} Category</h1>
                    <p className="font-kanit font-light text-gray-300 py-5 break-words text-center">
                        Browse meal categories to quickly find dishes that match your cravings—whether it’s breakfast, dinner, dessert, or something healthy. Easily explore recipes tailored to your taste and lifestyle
                    </p>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search by category (eg. 'Shawrma' )"/>
            </div>

            {loading ? 
                    ( <Spinner/>):
                    (errorMessage ? <p className="text-4xl text-center">{errorMessage}</p> : 
                        data.meals == null ? <p className="text-4xl text-center">Sorry, I can't find this ingredient. :((</p> :
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
                               {data?.meals?.filter((d)=> d.strMeal.toLowerCase().includes(searchTerm.toLowerCase())).map((d, i)=> 
                                <Card  key={i} imgUrl={d.strMealThumb} title={d.strMeal} idMeal={d.idMeal} showButton={true}/>
                                )}
                            </div>
                        )
                    }
        </section>
    );
}

export default CategoryMeal