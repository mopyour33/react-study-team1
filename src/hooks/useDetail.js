import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchDetail = async ({ queryKey }) => {
    const newsId = queryKey[1];
    console.log("요청 ID:", newsId);

    try {
        const response = await api.get('/latest', {
            params: {
                id: newsId
            }
        });

        return response.data;
    } catch (error) {
        console.error("API 오류:", error);
        throw error;
    }
};


export const useDetailQuery = (newsId) => {
    return useQuery({
        queryKey: ['news-detail', newsId],
        queryFn: () => fetchDetail({ queryKey: ['news-detail', newsId] }),
        enabled: !!newsId,
        suspense: false, // 컴포넌트에서 로딩 상태 처리
        staleTime: 5 * 60 * 1000, // 5분 캐시
    });
};

export default useDetailQuery;