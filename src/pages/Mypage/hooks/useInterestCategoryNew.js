import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_NEWS_KEY;
const baseURL = "https://newsdata.io/api/1/news";

//https://newsdata.io/api/1/news?apikey=apikey&language=ko&category=technology&q=인공지능

// const fetchInterestCategoryNews = async ({queryKey}) => {
//     const [, myCategoryList] = queryKey;

//     const dataList = await Promise.all(
//         myCategoryList?.map(async (category) => {
//             const request_URL = `/news?language=ko&category=${category}`;
//             let response = await api.get(request_URL);
//             let data = response.data;
//             if (data?.results.code === 'UnsupportedFilter'){
//                 console.log(`warning : '${category}' category does not exist data`);
//                 return { 
//                     category,
//                     data : [],
//                 };
//             }
//             return {
//                 category,
//                 data: data?.results,
//             };
//         })
//     );
//     console.log("dataList,",dataList);
//     return dataList;

// };


const fetchInterestCategoryNews = async ({queryKey}) => {
    const [, myCategoryList] = queryKey;

    const dataList = await Promise.all(
        myCategoryList?.map(async (category) => {
            const request_URL = `${baseURL}?apikey=${API_KEY}&language=ko&category=${category}`;
            let response = await fetch(request_URL);
            let data = await response.json();

            if (data?.results.code === 'UnsupportedFilter'){
                console.log(`warning : '${category}' category does not exist data`);
                return { 
                    category,
                    data : [],
                };
            }
            return {
                category,
                data: data?.results,
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
        refetchOnWindowFocus: false,   // 윈도우 포커스 될 때 재요청 X
        refetchOnMount: false,         // 컴포넌트 재마운트 시 재요청 X
        refetchOnReconnect: false,     // 인터넷 연결 복구 시 재요청 X
        retry: false,                  // 실패 시 재시도 X
        staleTime: Infinity,          // 응답을 "무한히 신선한 데이터"로 간주 → 재요청 X
    });

}