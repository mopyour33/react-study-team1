import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchDetail() {

    const VITE_NEWS_KEY = import.meta.env.VITE_NEWS_KEY;
    console.log("VITE_NEWS_KEY : ", VITE_NEWS_KEY);

    return api.get(`/news?language=ko&category=top`);
}

export const useDetailQuery = () => {
    return useQuery({
        queryKey: ['news-detail'],
        queryFn: fetchDetail,
        suspense: true,
        select: (result) => result.data.results,
    })
}