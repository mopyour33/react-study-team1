import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchTopNews=()=>{

    const VITE_NEWS_KEY = import.meta.env.VITE_NEWS_KEY;
    console.log("VITE_NEWS_KEY : ", VITE_NEWS_KEY)

    
    //https://newsdata.io/api/1/news?apikey=pub_83984afe5a4832eea50f96310250e5308e613&language=ko&category=technology&q=인공지능

    return api.get(`/news?apikey=pub_83984afe5a4832eea50f96310250e5308e613&language=ko&category=top`)
}


export const useTopNewsQuery=()=>{
    return useQuery({
        queryKey: ['news-top'],
        queryFn: fetchTopNews,
        select: (result) => result.data.results,
        
    })
}