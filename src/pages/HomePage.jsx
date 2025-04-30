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
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search ingredients"/>
                </div>
              
                    {loading ? 

                    ( <Spinner/>):
                    (errorMessage ? <p>{errorMessage}</p> : 
                        data == null ? <p className="text-4xl text-center">Sorry, I can't find this ingredient. :((</p> :
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
                                  { data.map((d, i) => 
                                <Card  meals={d} key={i}/>
                                )}
                            </div>
                        )
                    }
                    
{/*                 
                <div className="shadow-lg shadow-lime-400 ">
                    <img src="https://flagcdn.com/160x120/ua.png" width="160" height="120"  alt="Ukraine" ></img>
                </div> */}
 
 
 

 
 


  
            </div>           
        </section>
    );
}

export default HomePage