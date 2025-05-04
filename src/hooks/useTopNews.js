import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchTopNews=()=>{
    console.log("훅 탑")
    
    //https://newsdata.io/api/1/news?apikey=pub_83984afe5a4832eea50f96310250e5308e613&language=ko&category=technology&q=인공지능

    return api.get(`/news?language=ko&q=top`)
}


export const useTopNewsQuery=()=>{
    return useQuery({
        queryKey: ['news-top'],
        queryFn: fetchTopNews,
        select: (result) => result.data.results,
        
    })
}