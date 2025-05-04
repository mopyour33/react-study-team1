import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchListNews = async (category) => {
  try {
    const params = {
      country: 'kr',
      language: 'ko',
      q: category,
    };

    console.log("params", params);
    const response = await api.get('/news', { params });
    if (response.data.status === 'error') {
      console.error('뉴스 요청 오류:', response.data.results.message);
      return [];
    }

    return response;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      // 429 오류가 발생하면 1초 후에 재시도
      console.log("Too many requests, retrying in 1 second...");
      setTimeout(fetchNewsWithDelay, 1000); // 1000ms (1초) 뒤에 재시도
    } else {
      console.error('API 호출 실패:', error);
    }
    return [];
  }
};



export const useListNewsQuery = (category) => {
  console.log("category", category);
  return useQuery({
    queryKey: ["news-list", category],
    queryFn: () => fetchListNews(category),
    select: (result) => result.data.results,
    retry: 3,
    retryDelay: 2000,
  });
};
