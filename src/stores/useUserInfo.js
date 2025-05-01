import { create } from "zustand"

const useUserInfo = create((set, get) => ({

    // userInfo:[],
    userInfoList: [
        {
            id: 'AAA',
            cusInfo: {
                password: '123',
                email: '111@naver.com',
                name: '홍길동',
                birth: '911111',
                city: 'seoul',
                zipCode: '11111',
                addressDetail: '홍길동로 111, 222동 333호(홍길동 아파트)',
                phoneNumber: '010-1111-4444',
                mobileCompany: '1',
                sex: '1',
                categoryILike: ['economy', 'sports'],
                //찜한 것은 여기에 저장됨
                myFavoriteNews: [
                    {
                        article_id: "32558c6a9e74b59ee405aa2db536c34a",
                        category: ['top'],
                        image_url: "https://assets.nst.com.my/images/articles/fine15_NSTfield_image_listing_featured_v2.var_1746053071.jpg",
                        title: "Everything is fine: Trump's cabinet shrugs off shrinking economy",
                        link:"https://www.nst.com.my/world/world/2025/05/1209851/everything-fine-trumps-cabinet-shrugs-shrinking-economy",
                    },
                    {
                        article_id: "64a5fa9dc9d867b335a68b046ac101bb",
                        category: ['sports'],
                        image_url: "https://www.yardbarker.com/media/3/b/3bf3267cb422f74192e878b822e9d39fbd1ad428/thumb_16x9/javier-baezs-resurgence-continues-win-vs-astros.jpg?v=1",
                        title: "Javier Baez's resurgence continues in win vs. Astros",
                        link:"https://www.yardbarker.com/mlb/articles/javier_baezs_resurgence_continues_in_win_vs_astros/s1_13132_42132389",
                    }],
                //찜한 것은 여기에 저장됨
            }
        }
    ],
    updateUserInfo: (id, updateCusInfo) => {
        set((state) => ({
            userInfoList: state.userInfoList.map((user) => (
                user.id === id ? { ...user, cusInfo: { ...user.cusInfo, ...updateCusInfo } } : user
            )),
        }))
    },
    getUserInfoById: (id) => {
        return get().userInfoList.find((user) => user.id === id);
    },
}))

export default useUserInfo
