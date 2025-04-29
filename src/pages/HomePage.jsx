import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import { useState } from "react";
import useFetch from "../hooks/useFetch";


const HomePage = ()=>{

    const [data, loading, errorMessage] = useFetch('/filter.php?c=Seafood');

 

    return(
        <section>
            <Header/>
            <div className="max-container flex flex-col justify-center items-center padding-x">
                <div className="text-center max-w-3xl grid grid-col-1 gap-4 padding-y">
                    <h1 className="text-5xl font-kanit">Dishcovery</h1>
                    <p className="text-sm text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias unde, facere harum impedit excepturi porro voluptatum vel odio nisi repellat nobis eligendi perspiciatis inventore non, debitis eveniet commodi recusandae saepe.</p>
                    <Search/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                
                <div className="shadow-lg shadow-lime-400 ">
                    <img src="https://flagcdn.com/160x120/ua.png" width="160" height="120"  alt="Ukraine" ></img>


                </div>
 
 
 

 
 


  
            </div>           
        </section>
    );
}

export default HomePage