import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
        headers: {
          'content-type': 'application/json',
        },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try{
            const res = await axios.request(options);
            setData(res.data.pokemon);
            setIsLoading(false);
        }catch(error){
            setError(error);
            alert(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refrech = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refrech};
}

export default useFetch;