import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchDetail = async ({ queryKey }) => {
    const newsId = queryKey[1];

    try {
        const response = await api.get('/latest', {
            params: {
                id: newsId,
                // 전체 콘텐츠 포함
                full_content: 1,
                // 중복 제거
                removeduplicate: 1
            }
        });

        return response.data;
    } catch (error) {
        console.error("뉴스 상세 정보를 가져오는 중 오류 발생:", error);
        throw error;
    }
};


export const useDetailQuery = (newsId) =>
    useQuery({
        queryKey: ["news-detail", newsId],
        queryFn: fetchDetail,
        staleTime: 1000 * 60 * 5, // 5분 동안 데이터 유지
        cacheTime: 1000 * 60 * 30, // 30분 동안 캐시 유지
        retry: 1, // 실패 시 1번 재시도
        refetchOnWindowFocus: false, // 창이 포커스될 때 자동 리페치 안 함
    });

export default useDetailQuery;