import { useState, useEffect } from "react";
import axios from '../axios'


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchMeal = async ()=>{
            setLoading(true);
            try {
                const res = await axios.get(url);
                console.log(res.data);
                setData(res.data);
            }catch(error){
                console.log(error)
                setErrorMessage(error.message)
            }finally{
                setLoading(false);
            }
        }

        fetchMeal();

    }, [url]);

    return [data, loading, errorMessage]

}

export default useFetch;