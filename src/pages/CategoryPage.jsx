import Search from "../components/Search";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
const CategoryPage = ()=>{

    const [searchTerm, setSearchTerm] = useState('');
    const [data, loading, errorMessage] = useFetch('/categories.php');

    // useEffect(()=>{
    //     const fetchCategory = async ()=>{
    //         try{
    //             const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    //             const data = await res.json();

    //             console.log(data)
    //         }catch(error){
    //             console.log(error);
    //         }
    //     }

    //     fetchCategory();
    // }, []);
    

    return(
        <section className="max-container padding-x flex flex-col justify-center items-center">
            <div className="text-center max-w-3xl padding-y ">
                    <h1 className="text-4xl font-kanit ">Browse Category</h1>
                    <p className="font-kanit font-light text-gray-300 py-5 break-words text-center">
                        Browse meal categories to quickly find dishes that match your cravings—whether it’s breakfast, dinner, dessert, or something healthy. Easily explore recipes tailored to your taste and lifestyle
                    </p>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search ingredients"/>
            </div>

            {loading ? (<Spinner/>) : 
                (errorMessage ? 
                     <p className="text-4xl text-center">{errorMessage}</p> :
                    <p>tarub</p>
                )
            }


        
        </section>
    );
}

export default CategoryPage;