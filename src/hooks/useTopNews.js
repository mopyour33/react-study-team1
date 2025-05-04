import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchTopNews=()=>{
    return api.get(`/news?language=ko&q=top`)
}


export const useTopNewsQuery=()=>{
    return useQuery({
        queryKey: ['news-top'],
        queryFn: fetchTopNews,
        select: (result) => result.data.results,
        
    })
}