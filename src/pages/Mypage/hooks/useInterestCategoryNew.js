import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_NEWS_KEY;
const baseURL = "https://newsdata.io/api/1/latest";

const fetchInterestCategoryNews = async ({queryKey}) => {
    const [, myCategoryList] = queryKey;

    const dataList = await Promise.all(
        myCategoryList?.map(async (category) => {
            const request_URL = `${baseURL}?apikey=${API_KEY}&q=${category}`;
            let response = await fetch(request_URL);
            let data = await response.json();
            return {
                category,
                data: data?.results || [],
            };
        })
    );
    console.log("dataList,",dataList);
    return dataList;

};


export const useInterestCategoryNews = (myCategoryList) => {
    return useQuery({
        queryKey: ['userFavorite-category', myCategoryList],
        queryFn: fetchInterestCategoryNews,
        // select: (response) => (response?.results),
        refetchOnWindowFocus: false,   // 윈도우 포커스 될 때 재요청 ❌
        refetchOnMount: false,         // 컴포넌트 재마운트 시 재요청 ❌
        refetchOnReconnect: false,     // 인터넷 연결 복구 시 재요청 ❌
        retry: false,                  // 실패 시 재시도 ❌
        staleTime: Infinity,          // 응답을 "무한히 신선한 데이터"로 간주 → 재요청 ❌
    });

}