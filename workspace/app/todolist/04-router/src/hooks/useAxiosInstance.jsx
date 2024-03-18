import axios from 'axios';

/*  Axios Instance ----------------------------- */
// Axios 라이브러리를 사용하여 HTTP 요청을 수행하기 위한 설정을 담고 있는 객체

const API_SERVER = 'https://todo-api.frontendschool.shop/api';

function useAxiosInstance(){
  const instance = axios.create({
    baseURL: API_SERVER, // 기본 url
    timeout: 1000*10,
    headers: {
      'content-type': 'application/json', // request의 데이터 타입
      accept: 'application/json', // response의 데이터 타입
    }
  })


  return instance;
}

export default useAxiosInstance;