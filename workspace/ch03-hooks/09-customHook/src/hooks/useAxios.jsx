import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://todo-api.frontendschool.shop/api';
axios.defaults.timeout = 1500;


function useFetch(fetchParams){
  const [data,setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState()

  useEffect(()=>{
    console.log('api 서버 호출', fetchParams);
    request(fetchParams);
  }, []); 


  const request = async params => {
    try{
      setIsLoading(true);
      const res = await axios(params.url);
      console.log(res);
      setError(null);
      setData(res.data);
    }catch(err){
      console.error(err.message);
      setData(null);
      setError({message: '일시적인 문제. 재요청 필요'});
    }finally{
      setIsLoading(false);
    }

  } 

  return {isLoading, data, error};
}

export default useFetch;