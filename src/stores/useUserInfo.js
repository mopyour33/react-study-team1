import { create } from "zustand"

const useUserInfo = create((set) => ({
  
    // userInfo:[],
    userInfo:[],
    updateUserInfo: (id,password, email, city, zipcode, addressDetail, mobileCompany, phoneNumber, categoryList) => {
        return set((state)=>({
            ...state.userInfo.id })
        )}
}));

export default useUserInfo
