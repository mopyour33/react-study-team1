import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchDetail = async ({ queryKey }) => {
    const newsId = queryKey[1];
    // 요청 전송 전에 로그 추가
    console.log("Sending request with ID:", newsId, "and API KEY:", api.defaults?.params?.apikey || "No API key in defaults");
    try {
        // id 파라미터만 사용하고 다른 파라미터는 제거
        const response = await api.get('/latest', {
            params: {
                id: newsId
                // full_content와 removeduplicate 파라미터 제거
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
        queryFn: fetchDetail(newsId),
        suspense: true,
        select: (result) => result.data.results,
    });

export default useDetailQuery;