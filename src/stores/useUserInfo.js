import { create } from "zustand";

const useUserInfo = create((set, get) => ({
  // userInfo:[],
  userInfoList: [
    {
      id: "AAA",
      cusInfo: {
        password: "12345",
        email: "abc1234@naver.com",
        name: "홍길동",
        birth: "19911111",
        address: "서울시 송파구 송파대로 567",
        zipCode: "11111",
        addressDetail: "222동 333호(홍길동 아파트)",
        phoneNumber: "010-1111-4444",
        mobileCompany: "1", // 1: SKT, 2: KT, 3:LGU+
        sex: "1", //1:남자, 2:여자
        nationality: "1", //1:내국인, 2: 외국인
        categoryILike: ["top", "world", "sports"],
        myFavoriteNews: [
          //로그인한 사용자가 찜한 기사는 여기에 저장됨. 받아오신 기사 object 그대로 넣어주셔도 됩니다.
          {
            article_id: "a8eabf5eec2ea39002e176dc0038b17d",
            category: ["top"],
            image_url:
              "https://img1.newsis.com/2025/04/29/NISI20250429_0020789834_web.jpg?rnd=20250429084924",
            title:
              '검찰총장, 국회 탄핵소추 보고에 "탄핵 사유는 근거 없는 허위사실"',
            link: "https://www.newsis.com/view/NISX20250501_0003162044",
          },
          {
            article_id: "e5f66fb8bc1e5893ff223c1a19d291b3",
            category: ["sports"],
            image_url:
              "https://www.newscj.com/news/photo/202505/3264936_3327968_3538.jpg",
            title:
              "[야구] 롯데, 주중 3연전 싹쓸이 ‘공동 2위’ 도약... SSG는 3연패 탈출",
            link: "https://www.newscj.com/news/articleView.html?idxno=3264936",
          },
        ],
      },
    },
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

  // 새 유저 추가 함수 (회원가입 시 사용)
  addUserInfo: (newUser) => {
    set((state) => ({
      userInfoList: [...state.userInfoList, newUser], // 기존 리스트에 새 유저 추가
    }));
  },
}));

export default useUserInfo;
