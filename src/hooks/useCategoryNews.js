import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchCategoryNews = ({ category }) => {
    console.log("훅 카테고리")
    console.log("요청 카테고리:", category);

    return api.get(`/news?language=ko&category=${category}`)
}


export const useCategoryNewsQuery = ({ category }) => {
    return useQuery({
        queryKey: ['news-category', { category }],
        queryFn: () => fetchCategoryNews({ category }),
        select: (result) => result.data.results,
    })
}



export const useSearchMovieQuery = ({ keyword, page, genre, sort }) => {
    return useQuery({
        queryKey: ['movie-searh', { keyword, page, genre, sort }],
        queryFn: () => fetchSearchMovie({ keyword, page, genre, sort }),
        select: (result) => result.data

    })
}