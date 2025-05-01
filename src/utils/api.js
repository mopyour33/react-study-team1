import axios from "axios";


const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;


if (!VITE_APP_API_KEY) {
    console.error(".env 파일에 설정되지 않음");
} else {

}

const api = axios.create({
    baseURL: "https://content.guardianapis.com/",

    // 모든 요청에 자동으로 'api-key' 파라미터를 추가하도록 설정
    params: {
        'api-key': VITE_APP_API_KEY
    },
});


api.interceptors.request.use(function (config) {
    console.log("Request Interceptor:", config);
    return config;
}, function (error) {
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    console.log("Response Interceptor:", response);
    return response;
}, function (error) {
    console.error("Response Interceptor Error:", error);
    return Promise.reject(error);
});

export default api;