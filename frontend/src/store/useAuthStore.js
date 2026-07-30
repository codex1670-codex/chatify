import { create } from "zustand";

export const useAuthStore = create((set) => ({
    authUser:{name:"code-x",_id:"1234",age:100},
    isLoggedIn: false,
    isLoading:false,
    
    login:() => {
        console.log("We just logged in:");
        set({ isLoggedIn : true, isLoggedIn:true});
    },
}));