import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_KEY;

//https://newsdata.io/api/1/news?language=ko&category=top
//https://newsdata.io/api/1/news?apikey=pub_83984afe5a4832eea50f96310250e5308e613&language=ko&category=technology&q=인공지능

const api = axios.create({
    baseURL: "https://newsdata.io/api/1", 
    headers: {
        Accept: 'application/json',
        //Authorization: `Bearer ${API_KEY}`
    }
});

// 요청 인터셉터 추가하기
axios.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  }, function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  });

// 응답 인터셉터 추가하기
axios.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  }, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  });
export default api;