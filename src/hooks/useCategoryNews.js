import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchCategoryNews= (searchCategory )=>{
    return api.get(`/news?language=ko&q=${searchCategory}`)
}


export const useCategoryNewsQuery=(searchCategory)=>{
    return useQuery({
        queryKey: ['news-category', searchCategory],
        queryFn: () => fetchCategoryNews(searchCategory),
        select: (result) => result.data.results,        
    })
}
