import { useState,useEffect } from "react";
import axios from "axios";


const useFetch=(endpoint,query)=>{
    const [data,setData]=useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '7550eaf3cbmshf38b333a6b21c72p1c410bjsn866af5f01c13',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
          ...query
        },
        
      };

      const fetchData=async()=>{
        setIsLoading(true);


        try{
            const response=await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
            
        }
        catch(error){
            setError(error);
            alert(error)
        }
        finally{
            setIsLoading(false);
        }
      }
      

      useEffect(()=>{
        fetchData();
      },[]);

      const refetch=()=>{
        setIsLoading(true);
        fetchData();
      }

    
      return {data,isLoading,error,refetch}
}

export default useFetch;