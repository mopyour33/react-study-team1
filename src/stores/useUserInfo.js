import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserInfo = create(
  persist(
    (set, get) => ({
      userInfoList: [
        
      ],

      updateUserInfo: (id, updateCusInfo) => {
        set((state) => ({
          userInfoList: state.userInfoList.map((user) =>
            user.id === id
              ? { ...user, cusInfo: { ...user.cusInfo, ...updateCusInfo } }
              : user
          ),
        }));
      },

      getUserInfoById: (id) => {
        return get().userInfoList.find((user) => user.id === id);
      },

      addFavoriteNews: (userId, article) => {
        set((state) => ({
          userInfoList: state.userInfoList.map((user) =>
            user.id === userId
              ? {
                  ...user,
                  cusInfo: {
                    ...user.cusInfo,
                    myFavoriteNews: [
                      ...user.cusInfo.myFavoriteNews,
                      article,
                    ],
                  },
                }
              : user
          ),
        }));
      },

      removeFavoriteNews: (userId, articleId) => {
        set((state) => ({
          userInfoList: state.userInfoList.map((user) =>
            user.id === userId
              ? {
                  ...user,
                  cusInfo: {
                    ...user.cusInfo,
                    myFavoriteNews: user.cusInfo.myFavoriteNews.filter(
                      (a) => a.article_id !== articleId
                    ),
                  },
                }
              : user
          ),
        }));
      },

      addUserInfo: (newUser) => {
        set((state) => ({
          userInfoList: [...state.userInfoList, newUser],
        }));
      },
    }),
    {
      name: "user-info-storage", // 로컬스토리지에 저장될 key 이름
      getStorage: () => localStorage, // 기본값이 localStorage이지만 명시해도 좋아요
    }
  )
);

export default useUserInfo;
